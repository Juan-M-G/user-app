import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import {users} from '../../models/user.model'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnChanges {

  @Input() user: users = {
    name: "",
    age: 0,
    img: ''
  }
  @Output() addedFavorite = new EventEmitter<users>();
  ngOnChanges(){
    console.log('constructor','User Name =', this.user.name);
  }
  constructor() {
    console.log('constructor','User Name =', this.user.name);

  }

  ngOnInit(): void {
  }
  onAddFavorites(){
    this.addedFavorite.emit(this.user)
  }
}
