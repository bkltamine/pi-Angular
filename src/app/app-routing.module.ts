import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { LocationComponent } from './features/location/location.component';
import { AdminComponent } from './admin/admin.component';
import { EquipementComponent } from './features/equipement/equipement.component';
import { VisiteComponent } from './features/visite/visite.component';
import { EcoleComponent } from './features/ecole/ecole.component';
import { CompetitionComponent } from './features/competition/competition.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register-dealer', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'location' , component: LocationComponent},
  { path: 'equipement' , component: EquipementComponent},
  { path: 'visite' , component: VisiteComponent},
  { path: 'ecole' , component: EcoleComponent},
  { path: 'competition' , component: CompetitionComponent},
  { path: 'admin', component: AdminComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
