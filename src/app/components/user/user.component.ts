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
      date: '',
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
   @Input() favoriteIcon = "../../../assets/svg/falseFv.svg"
  favoriteFunc(){
    this.isFavorite = !this.isFavorite
    if(this.isFavorite)
      this.favoriteIcon = "../../../assets/svg/trueFv.svg"
    else
    this.favoriteIcon = "../../../assets/svg/falseFv.svg"
  }

  @Output() addedFavorite = new EventEmitter<users>();
  @Output() detailUser = new EventEmitter<users>();
  ngOnChanges() {
  }
  constructor() {

  }
  detailView(){
    console.log(this.user)
    this.detailUser.emit(this.user)

  }
  onAddFavorites() {
    this.addedFavorite.emit(this.user)
  }
}
