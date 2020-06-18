import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { RegisterCustomerComponent } from './register-customer/register-customer.component';



@NgModule({
  imports: [ReactiveFormsModule],
  exports: [],
  declarations: [RegisterComponent, LoginComponent, ],
  providers: [],
})
export class NameModule { }
