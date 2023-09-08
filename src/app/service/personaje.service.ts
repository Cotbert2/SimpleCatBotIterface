import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService implements OnInit{
  URL = 'http://localhost:8080/'
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    console.log('Service start');
  }
  public getAllData = ()  => {
    return this.http.get(this.URL);
  }
}
