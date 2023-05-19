import { Component, OnInit } from '@angular/core';
import { loginCredentials } from '../types/loginCredentials';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  checked: boolean;
  showDetails: boolean = false;

  loginCreds: loginCredentials = {
      user: '',
      pass: ''
  }

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginCreds)
    //do backend shit
    this.router.navigateByUrl("/dashboard");
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
    return this.showDetails;
  }
}
