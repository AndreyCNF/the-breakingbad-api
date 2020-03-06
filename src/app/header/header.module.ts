import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    imports: [CommonModule, BrowserModule, HttpClientModule],
    providers: [HttpClientModule]
})
export class HeaderModule {

}