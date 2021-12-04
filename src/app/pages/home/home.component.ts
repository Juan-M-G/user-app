import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service'
import {users} from '../../models/user.model'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private userService: UsersService,
  ) { }
  userS: users[] = [];
  limit = 10;
  offset = 0;
  ngOnInit(): void {
    this.userService.getAllUsers(10, 0)
    .subscribe(data =>{
      this.userS = data.results
      this.offset += this.limit;
    })
  }
  onLoadMore(){
    this.userService.getAllUsers(this.limit, this.offset)
    .subscribe(data =>{
      this.userS = this.userS.concat(data.results);
      this.offset += this.limit;
      console.log(this.userS.length)
    })
  }

}
