import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputComponent } from './components/forms/input/input.component';
import { AddButtonComponent } from './components/buttons/add-button/add-button.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ HeaderComponent, InputComponent, AddButtonComponent ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  exports: [
    HeaderComponent, InputComponent, AddButtonComponent,
    FontAwesomeModule, FormsModule, ReactiveFormsModule,
  ]
})
export class SharedModule { }
