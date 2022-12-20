import { BrowserModule }            from '@angular/platform-browser';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations'
import { NgModule }                 from '@angular/core';
import { ReactiveFormsModule }      from '@angular/forms';
import { CommonModule }             from '@angular/common';
import { FormsModule  }             from '@angular/forms';

import { DropdownModule }           from 'primeng-lts/dropdown';
import { ButtonModule }             from 'primeng/button';
import { CardModule }               from 'primeng/card';
import { InputTextModule }          from 'primeng/inputtext';
import { CheckboxModule }           from 'primeng-lts/checkbox';
import { TabViewModule }            from 'primeng/tabview';

import { MatSliderModule }          from '@angular/material/slider';
import { MatStepperModule }         from '@angular/material/stepper';
import { MatFormFieldModule }       from '@angular/material/form-field';
import { MatInputModule }           from '@angular/material/input';
import { MatCheckboxModule }        from '@angular/material/checkbox';



import { AppRoutingModule }         from './app-routing.module';
import { AppComponent }             from './app.component';
import { LandingPageComponent }     from './landing-page/landing-page.component';
import { LoginComponent }           from './login/login.component';
import { RegisterComponent }        from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    /* PRIMENG Controls: */
    DropdownModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    CheckboxModule,
    TabViewModule,
    /* MATERIAL Controls: */
    MatSliderModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
