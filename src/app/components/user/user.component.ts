import { Component, OnInit, Input } from '@angular/core';
import {users} from '../../models/user.model'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: users = {
    name: "",
    age: 0,
    img: ''
  }

  constructor() {
    console.log('constructor','User Name =', this.user.name);

  }

  ngOnInit(): void {
  }

}
