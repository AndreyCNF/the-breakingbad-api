import { Component, OnInit, Injectable } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { ApiService } from '../model/api.service';
import { Personagens } from '../model/Personagens';
import {Route, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'bd-personagens-detalhes',
  templateUrl: './personagens-detalhes.component.html',
  styleUrls: ['./personagens-detalhes.component.css'],
  providers: [HomeComponent]
})

export class PersonagensDetalhesComponent implements OnInit {



  constructor(private apiService: ApiService, private homeComponent: HomeComponent, private route: ActivatedRoute) { }

  id: Personagens[];
  
  ngOnInit(): void {
      
this.getPersonagensID(this.route.snapshot.params['id']);

  }

getPersonagensID(id) {
  this.apiService.getPersonagensById(id).subscribe(res => {
    
    this.id = res
  })
}

}
