import { Component, OnInit } from '@angular/core';
import { ApiService } from '../model/api.service';
import { Personagens } from '../model/Personagens';

@Component({
  selector: 'bd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  personagens : Personagens[]; 
  pag = 1;
  pagCounter = 6; 
  
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    
    this.apiService.getPersonagens().subscribe(res => {
      this.personagens = res 
      console.log(res),
     err => console.log(err);
     });
  }

  getDetail(id){

    this.apiService.getPersonagensById(id) 
    console.log(id);
  }
}