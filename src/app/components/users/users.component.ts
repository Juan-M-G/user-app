import { Component, OnInit } from '@angular/core';
import {users} from '../../models/user.model'
import {UsersService} from '../../services/users.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.userService.getAllUsers()
    .subscribe(data=>{
      console.log(data)
    })
  }
  userS: users []= []
}
