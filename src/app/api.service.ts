import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  endpoint: string='https://reqres.in/api/';
  constructor(private http: HttpClient) { 

  }
  getData(url: string){

    return this.http.get(this.endpoint+url);
  }
}
