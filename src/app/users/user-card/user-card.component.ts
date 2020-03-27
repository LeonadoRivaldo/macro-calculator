import { Component, OnInit, Input } from '@angular/core';
import { IUser, IActivityLvl } from 'src/app/shared/models/user.model';
import { Confirmable } from 'src/app/shared/common/decorators';
import { faEdit, faTrashAlt, faEye } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/shared/services/user.service';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'mc-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user: IUser;

  icons = { faEdit, faTrashAlt, faEye };
  modal: NgbModalRef;
  userProps = Object.keys;

  get name(): string {
    return this.user.name;
  }

  constructor(
    private readonly modalService: NgbModal,
    private readonly userService: UserService
  ) { }

  ngOnInit(): void {
  }



  @Confirmable('Are you sure that?')
  async remove() {
    await this.userService.delete(this.user._id);
  }

  edit() {
    // continue
  }

  view() {
    alert('TODO view');
    // open view modal using a macro-component
  }


}
