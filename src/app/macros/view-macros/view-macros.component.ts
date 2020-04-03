import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import { NgbModalRef, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import {
  faAddressCard,
   faBatteryHalf,
   faFlask,
   faDrumstickBite,
   faPizzaSlice,
   faCookie,
   faDumbbell,
   faFireAlt,
   faHeartbeat,
 } from '@fortawesome/free-solid-svg-icons';
import { CaloriesCalculatorService } from 'src/app/shared/services/calories-calculator.service';
import { ICaloriesCalcFn } from 'src/app/shared/models/calories-calculator.model';
import { IMacros, IMacroItem } from 'src/app/shared/models/macros.model';

// continue get icons



@Component({
  selector: 'mc-view-macros',
  templateUrl: './view-macros.component.html',
  styleUrls: ['./view-macros.component.scss']
})
export class ViewMacrosComponent implements OnInit {

  @Input() userId: string;
  active = 'macros';

  Macros: IMacros = {
    calories: [
      { calc: 'bulk', title: 'Bulking' },
      { calc: 'maintenance', title: 'Maintenance' },
      { calc: 'cutting', title: 'Cutting' }
    ],
    macros: []
  };




  icons = {
    user: faAddressCard,
    calories: faBatteryHalf,
    macros: faFlask,
    proteins: faDrumstickBite,
    fats: faPizzaSlice,
    carbo: faCookie,
    bulk: faDumbbell,
    cutting: faFireAlt,
    maintenance: faHeartbeat,
  };

  private bulk: number;
  private cutting: number;
  private maintenance: number;
  private user: IUser;
  private modal: NgbModalRef;

  // user info ( uInfo )
  public get uInfo(): IUser {
    return this.user;
  }

  constructor(
    private readonly userservice: UserService,
    private readonly modalservice: NgbModal,
    private readonly kcalService: CaloriesCalculatorService
  ) {}

  async ngOnInit() {
    await this.fetchUser();
    this.calcCalories();
  }

  getCalories(calc: string) {
    return this[calc];
  }

  /** internal  */

  private async fetchUser() {
    this.user = await this.userservice.get(this.userId);
  }

  private calcCalories() {
    this.bulk = this.kcalService.bulk(this.user);
    this.cutting = this.kcalService.cutting(this.user);
    this.maintenance = this.kcalService.maintenance(this.user);
  }

}
