import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from 'src/app/modules/app-routing.module';
import { AppComponent } from 'src/app/app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, HttpClientModule, ReactiveFormsModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }