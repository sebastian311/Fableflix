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
}
