import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { users } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }
  getAllUsers(){
    //return this.http.get<users[]>('https://randomuser.me/api/')
    return this.http.get('https://randomuser.me/api/')
  }
}
