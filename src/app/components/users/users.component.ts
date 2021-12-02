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
  userS: users[] = [];

  ngOnInit(): void {
    this.userService.getAllUsers()
    .subscribe(results =>{
      this.userS = results
      console.log(results)
    })
  }
  favoriteList: users [] = [];
  addToFavorites(userS:users){
    this.boxService.addToFavoritesService(userS)
  }
}
