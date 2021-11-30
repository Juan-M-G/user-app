import { Component } from '@angular/core';
import {users} from './models/user.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user-app';
  imgParent = 'Textico'
  userS: users []= [
    {
    name: "Pedrito",
    age: 27,
    img: 'https://static1.abc.es/media/play/2017/05/17/dejame-salir-get-out_1-koPE--620x349@abc.jpg'
   },
   {
    name: "Fernandito",
    age: 28,
    img: 'https://static1.abc.es/media/play/2017/05/17/dejame-salir-get-out_1-koPE--620x349@abc.jpg'
   },
   {
    name: "Pelonsito",
    age: 29,
    img: 'https://static1.abc.es/media/play/2017/05/17/dejame-salir-get-out_1-koPE--620x349@abc.jpg'
   },
]



}
