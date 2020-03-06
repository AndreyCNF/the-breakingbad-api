import { NgModule } from '@angular/core';
import { PersonagensDetalhesComponent } from './personagens-detalhes.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [PersonagensDetalhesComponent],
    exports: [PersonagensDetalhesComponent],
    imports:[CommonModule, BrowserModule]
})
export class PersonagensDetalhesModule {

}