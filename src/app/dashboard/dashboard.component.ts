import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> afcde5ed1993cd21f88f08ffe4358652ffde8f8b

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

<<<<<<< HEAD
  constructor(private router: Router) { }
=======
  constructor() { }
>>>>>>> afcde5ed1993cd21f88f08ffe4358652ffde8f8b

  ngOnInit(): void {
  }

<<<<<<< HEAD
  navigateHome() {
    this.router.navigateByUrl("");
  }

=======
>>>>>>> afcde5ed1993cd21f88f08ffe4358652ffde8f8b
}
