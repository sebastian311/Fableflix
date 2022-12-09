import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fableflix';

  language: SelectItem[];
  selectedLanguage: any;

  constructor() {
    //SelectItem API with label-value pairs
    this.language = [
        {label:'Romanian', value: "Romanian"},
        {label:'English', value: "English"}
    ];
  }

  toggle(id) {
    // document.getElementsByClassName("faq-one")[0].childNodes
    // document.getElementsByClassName("faq-one")[0].childNodes[2].classList.add("inactive") and remove
    const faq = document.getElementsByClassName(id)[0];
    (faq.childNodes[2] as any).classList.toggle("active");
    (faq.childNodes[1] as any).classList.toggle("inactive");
    // document.getElementsByClassName("faq-one")[0].childNodes[2].classList.toggle("active")
    

  }
}
