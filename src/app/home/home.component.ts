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
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    
    this.apiService.getPersonagens().subscribe(res => {
      this.personagens = res 
      console.log(res),
     err => console.log(err);
     });
  }

}
