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
}
