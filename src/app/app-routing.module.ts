import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { LocationComponent } from './features/location/location.component';
import { AdminComponent } from './admin/admin.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register-dealer', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'location' , component: LocationComponent},
  { path: 'admin', component: AdminComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
