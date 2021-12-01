import { Component, OnInit } from '@angular/core';
import {users} from '../../models/user.model'
import {UsersService} from '../../services/users.service'
import {BoxService} from '../../services/box.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(
    private userService: UsersService,
    private boxService: BoxService
  ) {
    this.favoriteList = this.boxService.getFavoriteList();
  }

  ngOnInit(): void {
    this.userService.getAllUsers()
    .subscribe(data=>{
      console.log(data)
    })
  }
  favoriteList: users [] = [];
  userS: users []= []
  addToFavorites(userS:users){
    this.boxService.addToFavoritesService(userS)
  }
}
