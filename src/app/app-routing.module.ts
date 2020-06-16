import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { RegisterCustomerComponent } from './auth/register-customer/register-customer.component';
import { LoginComponent } from './auth/login/login.component';
import { LocationComponent } from './location/location.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register-dealer', component: RegisterComponent },
  { path: 'register-customer', component: RegisterCustomerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'location' , component: LocationComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
