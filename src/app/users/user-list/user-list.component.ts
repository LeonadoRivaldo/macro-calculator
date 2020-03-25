import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { IUser } from 'src/app/shared/models/user.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserFormComponent } from '../user-form/user-form.component';
@Component({
  selector: 'mc-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  showForm = false;
  users: IUser[];


  constructor(
    private readonly userService: UserService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.userService.userActions$.subscribe((action) => {
      const {name, value} = action;
      try {
        this[name](value);
      } catch (error) {
        console.error(error);
        console.log('unknown');
      }
    });

    this.getUsers();
  }

  addUser(bool?: boolean) {
    this.showForm = bool || !this.showForm;
    if ( this.showForm ) {
      this.modalService.open(UserFormComponent);
    } else {
      this.modalService.dismissAll();
    }
  }

  async getUsers() {
    this.users = await this.userService.getAll();
  }

}
