import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonagensDetalhesComponent } from './personagens-detalhes/personagens-detalhes.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
            title: 'The Breaking Bad API by Andrey Resende'
    }
  },
  {
    path: 'personagens/:id',
    component: PersonagensDetalhesComponent,
    data: {
            title: 'Detalhes'
    }
  },
  {
    path: '',
    redirectTo: "/home",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
