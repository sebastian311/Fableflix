import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';

import * as _ from 'lodash';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  $valueChanges = new BehaviorSubject(0)
  valueChangesObservable = this.$valueChanges.asObservable();
  subscriptionsArray: Subscription[] = [];

  backgroundColor = "#F3F3F3";
  step: number = 0;
  prevStep: number = undefined;
  largePanel: boolean;
  isEditable = false;

  constructor(private router: Router, public _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const sub = this.valueChangesObservable.subscribe( data => {
      console.log("#");
    })

    this.subscriptionsArray.push(sub);
  }

  navigateLogin() {
    this.router.navigateByUrl("/login");
  }
  navigateHome() {
    this.router.navigateByUrl("");
  }

  incrementStepAndUpdateValueAndValidity() : number {
    this.step = this.step + 1;
    this.$valueChanges.next(this.step); // cand step e 3, bagi js ca sa faci sticky pe pozitie...altfel nu stiu...

    return this.step;
  }

  ngOnDestroy(): void {
    this.subscriptionsArray.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
