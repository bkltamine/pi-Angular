import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public name;
  public password;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  login() {

    if (this.name === 'user' && this.password === "user") {
      this.router.navigateByUrl('/user');

    }
    if (this.name === 'admin' && this.password === "admin") {
      this.router.navigateByUrl('/admin');

    }
  }
}
