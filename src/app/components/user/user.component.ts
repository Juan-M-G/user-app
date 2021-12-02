import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { users } from '../../models/user.model'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnChanges {

  @Input() user: users = {
    gender: '',
    name: {
      title: '',
      first: '',
      last: ''
    },
    email: '',
    dob: {
      date: '',
      age: 0
    },
    registered: {
      date: new Date(1991,1,1),
      age: 0
    },
    picture: {
      large: '',
      medium: '',
      thumbnail: ''
    },
    nat: '',
    id:{
      value: ''
    }
  }
  isFavorite: boolean = false

  favoriteFunc(){
    this.isFavorite = !this.isFavorite
  }

  @Output() addedFavorite = new EventEmitter<users>();
  ngOnChanges() {
    console.log('constructor', 'User Name =', this.user.name);
  }
  constructor() {
    console.log('constructor', 'User Name =', this.user.name);

  }

  onAddFavorites() {
    this.addedFavorite.emit(this.user)
  }
  // isFavoriteState(){
  //   this.FavoriteState.emit(this.isFavorite)
  // }
}
