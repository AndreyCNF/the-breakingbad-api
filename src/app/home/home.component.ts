import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../model/api.service';
import { Personagens } from '../model/Personagens';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bd-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() personagens : Personagens[]; 
  filter: string = ' ';
  pag = 1;
  pagCounter = 6; 
  
  constructor(private apiService: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.apiService.getPersonagens().subscribe(res => {
      this.personagens = res,
     err => console.log(err);
     });

    
  }

  getDetail(id){

    this.apiService.getPersonagensById(id) 
    this.router.navigate([`/personagens/${id}`])

  }
}