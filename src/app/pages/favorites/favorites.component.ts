import { Component, OnInit } from '@angular/core';
import {users} from '../../models/user.model'
import {BoxService} from '../../services/box.service'
import {ExportCsvService} from '../../services/export-csv.service'


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favoriteList: users [] = [];
  csvName: string = '';
  displayBtn = "display: none;"
  stateFv = "../../../assets/svg/trueFv.svg"
  constructor(
    private boxService: BoxService,
    private toCsv: ExportCsvService
    ) {
    this.favoriteList = this.boxService.getFavoriteList();
   }
   
   toExport(){
    this.toCsv.orderData(this.favoriteList, this.csvName);
  }
  ngOnInit(): void {

  }

}
