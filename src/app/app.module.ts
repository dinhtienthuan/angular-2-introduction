
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contact/contact-list.component';
import { ContactComponent } from './contact/contact.component';

import { NewContactComponent } from './contact/new-contact.component';
import {AppRoutingModule} from "./app.routing";
import {ContactService} from "./contact/contact.service";
import { HttpTestComponent } from './http-test/http-test.component';
import {HttpTestService} from "./http-test/http-test.service";

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactComponent,
    NewContactComponent,
    HttpTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ContactService, HttpTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
