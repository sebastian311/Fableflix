import { Component, ElementRef, EventEmitter, HostListener, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
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
  index: number;
  prevStep: number = undefined;
  largePanel: boolean;
  paypalBorder: boolean = false;
  mastercardBorder: boolean = false;
  isEditable = false;

  constructor(private router: Router, public _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    ///
  }

  ngAfterViewInit() {
    const sub = this.valueChangesObservable.subscribe( data => {
      // if ( this.step === 2 ) {
      //   let newHeight = (document.querySelector('.content') as any).style.height = '100vh';
      //   return newHeight;
      // }
    })

    this.subscriptionsArray.push(sub);
  }

  paypal() {
    this.paypalBorder = true;
    this.mastercardBorder = false;

    return this.paypalBorder, this.mastercardBorder
  }

  mastercard() {
    this.paypalBorder = false;
    this.mastercardBorder = true;

    return this.paypalBorder, this.mastercardBorder
  }

  navigateToDashboard() {
    this.router.navigateByUrl("/dashboard");
  }
  navigateLogin() {
    this.router.navigateByUrl("/login");
  }
  navigateHome() {
    this.router.navigateByUrl("");
  }

  incrementStepAndUpdateValueAndValidity() : number {
    this.step = this.step + 1;
    this.$valueChanges.next(this.step);

    return this.step;
  }

  ngOnDestroy(): void {
    this.subscriptionsArray.forEach(sub => {
      sub.unsubscribe();
    });
  }
}
