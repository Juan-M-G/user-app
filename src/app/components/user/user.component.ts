import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { users } from '../../models/user.model'
// import {BehaviorSubject} from 'rxjs'

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

  favoriteFunc(){
    this.isFavorite = !this.isFavorite
  }

  @Output() addedFavorite = new EventEmitter<users>();
  @Output() detailUser = new EventEmitter<users>();
  // private detailUser = new BehaviorSubject<users>(this.user)
  // detailUser$ = this.detailUser.asObservable();
  ngOnChanges() {
  }
  constructor() {

  }
  detailView(){
    // this.detailUser.next(this.user)
    // console.log('Estoy en user componeent ')
    console.log(this.user)
    this.detailUser.emit(this.user)

  }
  onAddFavorites() {
    this.addedFavorite.emit(this.user)
  }
}
