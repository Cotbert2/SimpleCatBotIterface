
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiBotService implements OnInit{
  API_URL= 'http://127.0.0.1:5000/api/';

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    console.log('Service start');
  }

  public sendMessageToArthur(message : any) : Observable<any> {
    return this.http.post(`${this.API_URL}newMessage`, message);
  }

}