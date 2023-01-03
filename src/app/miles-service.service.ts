import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './models/Data';

@Injectable({
  providedIn: 'root'
})
export class MilesServiceService {

  constructor(private http:HttpClient) { }

  getService()
  {
    return this.http.get<Data>("http://localhost:3000/card1")
  }

  getNotice()
  {
    return this.http.get<Data>("http://localhost:3000/notice")
  }

}