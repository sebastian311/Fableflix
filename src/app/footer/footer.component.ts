import { Component, Input, OnInit } from '@angular/core';
import { SelectItem } from 'primeng-lts/api/selectitem';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() backgroundCol: string;

  language: SelectItem[];
  selectedLanguage: any;

  constructor() {
    //SelectItem API with label-value pairs
    this.language = [
        {label:'Romanian', value: "Romanian"},
        {label:'English', value: "English"}
    ];
  }

  ngOnInit(): void {
    //
  }

  re(message) {
    alert(message)
  }
}
