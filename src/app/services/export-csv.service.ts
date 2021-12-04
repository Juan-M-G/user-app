import { Injectable } from '@angular/core';
import {users, csvData} from '../models/user.model'
@Injectable({
  providedIn: 'root'
})
export class ExportCsvService {

  constructor() { }
  aux : csvData = {
    gender: '',
    name: '',
    email: '',
    age: 0,
    nationality: '',
    birthDate: '',
    registerDate: ''
  } 
  orderedData :csvData[] = [];
  orderData(data:users[], filename='data'){
    for(let i of data){
      this.aux = {
        gender: i.gender,
        name: i.name.first + ' ' + i.name.last,
        email: i.email,
        age: i.dob.age,
        birthDate: i.dob.date,
        nationality: i.nat,
        registerDate: i.registered.date
      }
      this.orderedData.push(this.aux)
    }
    console.log(this.orderedData)
    this.downloadFile(this.orderedData, filename)
  }

  downloadFile(data :csvData[], filename='data') {
    let csvData = this.ConvertToCSV(data, ['gender','name', 'email', 'age', 'birthDate', 'nationality', 'registerDate']);
    console.log(csvData)
    let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
        dwldLink.setAttribute("target", "_blank");
    }
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", filename + ".csv");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
}
  
  ConvertToCSV(objArray: csvData[], headerList:[string,string,string,string,string,string,string]) {
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = '';
    for (let index in headerList) {
    row += headerList[index] + ',';
    }
    row = row.slice(0, -1);
    str += row + '\r\n';
    for (let i = 0; i < array.length; i++) {
     let line = '';
     for (let index in headerList) {
      let head = headerList[index];
      line +=  array[i][head] + ',';
     }
     line = line.slice(0, -1);
     str += line + '\r\n';
    }
    return str;
   }

}
