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
     if(this.favoriteList.indexOf(userS) != -1)
      {this.favoriteList.splice(this.favoriteList.indexOf(userS) , 1)
      console.log(this.favoriteList.indexOf(userS))}
      else
        this.favoriteList.push(userS)
  }


}
