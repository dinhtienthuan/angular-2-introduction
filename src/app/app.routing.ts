// import { Routes, RouterModule } from '@angular/router';
// import {ContactListComponent} from "./contact/contact-list.component";
// import {ModuleWithProviders} from "@angular/core";
// import {NewContactComponent} from "./contact/new-contact.component";
//
// const APP_ROUTES: Routes = [
//   { path: '', redirectTo: '/contacts', pathMatch: 'full' },
//   { path: 'contacts', component: ContactListComponent},
//   { path: 'new-contacts', component: NewContactComponent}
// ];
//
// export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
//
//

import {Routes, RouterModule} from "@angular/router";
import {ContactListComponent} from "./contact/contact-list.component";
import {NewContactComponent} from "./contact/new-contact.component";
import {NgModule, ModuleWithProviders} from "@angular/core";

const APP_ROUTES: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactListComponent, },
  { path: 'new-contacts', component: NewContactComponent}
];

const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

@NgModule({
  imports: [
    routing
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
