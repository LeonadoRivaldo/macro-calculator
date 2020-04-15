import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputComponent } from './components/forms/input/input.component';
import { AddButtonComponent } from './components/buttons/add-button/add-button.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ToastrModule } from 'ngx-toastr';
import { UserCardComponent } from '../users/user-card/user-card.component';
@NgModule({
  declarations: [ HeaderComponent, InputComponent, AddButtonComponent, UserCardComponent ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [ CookieService ],
  exports: [
    UserCardComponent,
    HeaderComponent, InputComponent, AddButtonComponent,
    FontAwesomeModule, FormsModule, ReactiveFormsModule, NgbModule,
  ]
})
export class SharedModule { }
