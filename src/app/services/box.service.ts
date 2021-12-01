import { Injectable } from '@angular/core';
import {users} from '../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class BoxService {

  constructor() { }

  private favoriteList: users [] = [];
  getFavoriteList(){
    return this.favoriteList;
  }
  addToFavoritesService(userS:users){
    this.favoriteList.push(userS)
  }

}
