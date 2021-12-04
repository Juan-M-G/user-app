import { Component, Input, Output, EventEmitter } from '@angular/core';
import {users} from '../../models/user.model'
import {BoxService} from '../../services/box.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  constructor(
    private boxService: BoxService
  ) {
    this.favoriteList = this.boxService.getFavoriteList();
  }
  @Input() userS: users[] = [];
  @Output() loadMore = new EventEmitter();
  btnDisabled = false
  @Input() displayBtn:string = "display: inline;"
  @Input() isFavorite: string = "../../../assets/svg/falseFv.svg"
  onLoadMore(){
    if (this.userS.length === 90)
      this.btnDisabled = true
    this.loadMore.emit();
  }
  @Output() favoriteList: users [] = [];
  addToFavorites(userS:users){
    this.boxService.addToFavoritesService(userS)
    console.log(this.favoriteList)
  }
  detailUser(userS:users){
    this.boxService.getDetailUser(userS)
  }
}
