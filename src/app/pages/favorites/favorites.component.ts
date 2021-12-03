import { Component, OnInit } from '@angular/core';
import {users} from '../../models/user.model'
import {BoxService} from '../../services/box.service'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favoriteList: users [] = [];

  constructor(private boxService: BoxService) {
    this.favoriteList = this.boxService.getFavoriteList();
   }

  ngOnInit(): void {

  }

}
