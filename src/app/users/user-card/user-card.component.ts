import { Component, OnInit, Input } from '@angular/core';
import { IUser, IActivityLvl } from 'src/app/shared/models/user.model';
import { Confirmable } from 'src/app/shared/common/decorators';
import { faEdit, faTrashAlt, faEye } from '@fortawesome/free-solid-svg-icons';
import { UserService } from 'src/app/shared/services/user.service';
import { NgbModalRef, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { ViewMacrosComponent } from 'src/app/macros/view-macros/view-macros.component';

@Component({
  selector: 'mc-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user: IUser;
  @Input() isView = false;

  icons = { faEdit, faTrashAlt, faEye };
  userProps = Object.keys;

  private modal: NgbModalRef;

  get name(): string {
    return this.user.name;
  }

  constructor(
    modalConfig: NgbModalConfig,
    private readonly modalService: NgbModal,
    private readonly userService: UserService
  ) {
    modalConfig.keyboard = true;
  }

  ngOnInit(): void {
  }



  @Confirmable('Are you sure that?')
  async remove() {
    await this.userService.delete(this.user._id);
  }

  edit() {
    alert('TODO edit');
  }

  view() {
    this.modal = this.modalService.open(ViewMacrosComponent, { size: 'xl' });
    const component: ViewMacrosComponent = this.modal.componentInstance;
    component.userId = this.user._id;
  }


}
