import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

interface IContollerForm {
  [key: string]: AbstractControl;
}
@Component({
  selector: 'mc-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  constructor() { }
  userForm: FormGroup;
  formKeys: string[];
  get form(): IContollerForm {
    return this.userForm.controls;
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.min(3)]),
      age: new FormControl(null, [Validators.required, Validators.pattern(/[0-9]/)]),
      gender:  new FormControl(null, [Validators.required]),
      weight: new FormControl(null, [Validators.required, Validators.pattern(/[0-9]/)]),
      height: new FormControl(null, [Validators.required, Validators.pattern(/[0-9]/)]),

      activity: new FormControl(null, [Validators.required]),
      exObese: new FormControl(false)
    });

    this.formKeys = Object.keys(this.form);

  }

}
