import { Component, OnInit, Input } from '@angular/core';
import { IUser, IActivityLvl } from 'src/app/shared/models/user.model';
import { Confirmable } from 'src/app/shared/common/decorators';
import { faEdit, faTrashAlt, faEye } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'mc-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user: IUser;

  icons = { faEdit, faTrashAlt, faEye };
  userProps = Object.keys;

  get name(): string {
    return this.user.name;
  }

  constructor(
    private readonly userService: UserService
  ) { }

  ngOnInit(): void {
  }



  @Confirmable('Are you sure that?')
  remove() {
    // add remove
    alert('TODO remove');
  }

  edit() {
    alert('TODO edit');
    // call service and open form with user data
  }

  view() {
    alert('TODO view');
    // open view modal using a macro-component
  }


}
