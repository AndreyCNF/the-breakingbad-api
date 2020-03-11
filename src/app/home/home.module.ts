import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterByDescription } from './filter-by-description.pipe';

@NgModule({
    declarations: [HomeComponent],
    exports: [HomeComponent],
    imports: [CommonModule, BrowserModule, HttpClient, NgxPaginationModule]
})
export class HomeModule {

}