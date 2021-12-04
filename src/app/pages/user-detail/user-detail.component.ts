import { Component, OnInit, Input } from '@angular/core';
import {users} from '../../models/user.model'
import {Location} from '@angular/common'
import {BoxService} from '../../services/box.service'


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: users = {
    gender: '',
    name: {
      title: '',
      first: '',
      last: ''
    },
    email: '',
    dob: {
      date: '',
      age: 0
    },
    registered: {
      date: '',
      age: 0
    },
    picture: {
      large: '',
      medium: '',
      thumbnail: ''
    },
    nat: '',
    id:{
      value: ''
    }
  }
  constructor(
    private location: Location,
    private boxService: BoxService
  ) { }

  ngOnInit(): void {
    this.boxService.detailUser$.subscribe(userDetail => {
      this.user = userDetail
    });
  }
  goToBack(){
    this.location.back();
  }
}
