import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  checked: boolean;
  showDetails: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
    return this.showDetails;
  }
}
