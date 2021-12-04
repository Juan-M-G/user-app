import { Injectable } from '@angular/core';
import {users} from '../models/user.model'
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BoxService {

  user: users = {
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
  private detailUser = new BehaviorSubject<users>(this.user)
  detailUser$ = this.detailUser.asObservable();
  constructor() { }

  private favoriteList: users [] = [];
  getFavoriteList(){
    return this.favoriteList;
  }
  addToFavoritesService(userS:users){
     if(this.favoriteList.indexOf(userS) != -1)
      {this.favoriteList.splice(this.favoriteList.indexOf(userS) , 1)
      console.log(this.favoriteList.indexOf(userS))}
      else
        this.favoriteList.push(userS)
  }
  getDetailUser(userS:users){
    this.user = userS
    this.detailUser.next(this.user)
  }

}
