import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import { NgbModalRef, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { faAddressCard, faBatteryHalf, faFlask, faDrumstickBite, faPizzaSlice, faCookie} from '@fortawesome/free-solid-svg-icons';

// continue get icons

@Component({
  selector: 'mc-view-macros',
  templateUrl: './view-macros.component.html',
  styleUrls: ['./view-macros.component.scss']
})
export class ViewMacrosComponent implements OnInit {

  @Input() userId: string;
  active = 'macros';

  icons = {
    user: faAddressCard,
    calories: faBatteryHalf,
    macros: faFlask,
    proteins: faDrumstickBite,
    fats: faPizzaSlice,
    carbo: faCookie
  }

  private user: IUser;
  private modal: NgbModalRef;

  // user info ( uInfo )
  public get uInfo(): IUser {
    return this.user;
  }

  constructor(
    private readonly userservice: UserService,
    private readonly modalservice: NgbModal
  ) {
  }

  ngOnInit(): void {
    this.fetchUser();
  }

  private async fetchUser() {
    this.user = await this.userservice.get(this.userId);
  }

}
