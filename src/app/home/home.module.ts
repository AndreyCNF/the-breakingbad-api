import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@NgModule({
    declarations: [HomeComponent],
    exports: [HomeComponent],
    imports: [CommonModule, BrowserModule, HttpClient]
})
export class HomeModule {

}