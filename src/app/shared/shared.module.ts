import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputComponent } from './components/forms/input/input.component';
import { AddButtonComponent } from './components/buttons/add-button/add-button.component';



@NgModule({
  declarations: [ HeaderComponent, InputComponent, AddButtonComponent ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    HeaderComponent, InputComponent, AddButtonComponent,
    FontAwesomeModule
  ]
})
export class SharedModule { }
