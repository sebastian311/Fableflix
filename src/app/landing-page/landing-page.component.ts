import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  language: SelectItem[];
  selectedLanguage: any;

  constructor(private router: Router) {
    //SelectItem API with label-value pairs
    this.language = [
        {label:'Romanian', value: "Romanian"},
        {label:'English', value: "English"}
    ];
  }

  ngOnInit(): void {
  }

  toggle(id) {
    const faq = document.getElementsByClassName(id)[0];

    (faq as any).classList.toggle("block");

    (faq.childNodes[0].childNodes[2] as any).classList.toggle("active");
    (faq.childNodes[0].childNodes[1] as any).classList.toggle("inactive");
    
    if ( (faq.childNodes[1] as any).style.display == "" ) {
      (faq.childNodes[1] as any).style.display = "block";
    } else {
      (faq.childNodes[1] as any).style.display = "";
    }
  }

  navigateLogin() {
    this.router.navigateByUrl("/login");
  }

  navigateRegister() {
    this.router.navigateByUrl("/register");
  }

}
