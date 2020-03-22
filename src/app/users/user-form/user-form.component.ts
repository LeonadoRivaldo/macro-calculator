import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import activityList from '../../../assets/json/activity_level_list.json';
import { IActivityLvl } from 'src/app/shared/models/user.model';


interface IContollerForm {
  [key: string]: AbstractControl;
}
@Component({
  selector: 'mc-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  activityList: IActivityLvl[];
  userForm: FormGroup;
  formKeys: string[];
  get form(): IContollerForm {
    return this.userForm.controls;
  }
  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.min(3)]),
      age: new FormControl(null, [Validators.required, Validators.pattern(/[0-9]/)]),
      gender:  new FormControl(null, [Validators.required]),
      weight: new FormControl(null, [Validators.required, Validators.pattern(/[0-9]/)]),
      height: new FormControl(null, [Validators.required, Validators.pattern(/[0-9]/)]),

      activity: new FormControl('', [Validators.required]),
      exObese: new FormControl(false)
    });

    this.formKeys = Object.keys(this.form);
    this.activityList = activityList;
  }

}
