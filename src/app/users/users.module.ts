import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users.component';
import { UserCardComponent } from './user-card/user-card.component';
import { MacrosModule } from '../macros/macros.module';



@NgModule({
  declarations: [ UserListComponent, UserFormComponent, UsersComponent, UserCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
    MacrosModule
  ]
})
export class UsersModule { }
