import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  users: any = [];
  constructor(private api: ApiService) {

  }
  ngOnInit(){
    this.api.getData('users').subscribe( (result: any) =>{
      console.log(result);
      //result.data.forEach(u =>this.users.push(u)); es lo mismo a:
      for(let users of result.data){
        this.users.push(users);
      }
      });
      //
      
    }
  }
