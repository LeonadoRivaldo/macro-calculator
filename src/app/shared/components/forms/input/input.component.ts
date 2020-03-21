import { Component, OnInit, Input, ContentChild, AfterContentInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';
import { IUniqueError } from '../../../models/generic.model';
import { getElement } from '../../../common/util';

@Component({
  selector: 'mc-form-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit, AfterContentInit, OnChanges {


  @Input() name: string;
  @Input() label: string;
  @Input() title: string;
  @Input() srOnly = false;
  @Input() marginBottom = '20px';
  @Input() errorMessage: string;

  @Input() inputGroup = false;
  @Input() inputGroupPrepend = false;
  @Input() inputGroupPrependContent: string;
  @Input() inputGroupAppend = false;
  @Input() inputGroupAppendContent: string;

  @Input() clear = false;

  @Output() inputFieldEvents: EventEmitter<any> = new EventEmitter();
  @Output() clearEvent: EventEmitter<any> = new EventEmitter();

  input: any;

  @ContentChild(NgModel) model: NgModel;
  @ContentChild(FormControlName) control: FormControlName;


  // tslint:disable-next-line: variable-name
  _isNotUnique: boolean;
  // tslint:disable-next-line: variable-name
  _uniqueError: string;

  getInputError(error): any {
    if (this.input.errors) {
      return this.input.errors[error];
    } else {
      return null;
    }
  }



  get hasError() {
    return this.input.invalid && (this.input.dirty || this.input.touched );
  }

  get customError() {
    return this.hasError && !!this.errorMessage;
  }

  get senhaError() {
    return this.hasError && this.getInputError('senhaError');
  }
  get senhaErrorMsg() {
    return this.getInputError('senhaError');
  }
  get validationError() {
    return this.hasError && this.getInputError('validationError');
  }
  get validationErrorMsg() {
    return this.getInputError('validationError');
  }


  get invalidEmail() {
    return this.hasError && this.getInputError('email');
  }
  get invalidCEP() {
    return this.hasError && this.getInputError('invalidCEP');
  }

  get maxLength() {
    return this.hasError && this.getInputError('maxlength') !== undefined;
  }

  get maxLengthError() {
    const error = this.getInputError('maxlength');
    if (this.maxLength) {
      return `Número de caracteres ultrapassado. Escreva até ${error.requiredLength} caracteres.`;
    } else {
      return ``;
    }
  }

  get minLength() {
    return this.hasError && this.getInputError('minlength') !== undefined;
  }
  get minLengthError() {
    const error = this.getInputError('minlength');
    if (this.minLength) {
      return `Este campo deve conter no mínimo ${error.requiredLength} caracteres.`;
    } else {
      return ``;
    }
  }

  get required() {
    return this.hasError && this.getInputError('required');
  }

  get erroCustomizado() {
    return this.hasError && this.getInputError('erroCustomizado');
  }

  get isNotUnique() {
    const unique: IUniqueError = this.getInputError('unique');
    return this.hasError && unique && unique.isNotUnique;
  }
  get uniqueError() {
    const unique: IUniqueError = this.getInputError('unique');
    return unique ? unique.errorMsg : '';
  }

  get showClear() {
    return this.input.value && this.clear;
  }

  get pattern() {
    return this.hasError && this.getInputError('pattern') !== undefined;
  }
  get patternError() {
    const error = this.getInputError('pattern');

    return `Este deve conter ${error.requiredPattern.replace(/\//gmi, '')} caracteres.`;
  }

  clearField(): void {
    this.clearEvent.emit({name: `clear:field`});
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.input = this.control || this.model;

    if (this.input === undefined) {
      throw new Error('Esse componente precisa de uma diretiva ngModel ou formControlName para funcionar!');
    }

    this.addClearClass();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes.clear) {
      this.addClearClass();
    }
  }
  addClearClass() {
    setTimeout(() => {
      const inputElement: HTMLElement = getElement(`#${this.name}`) as HTMLElement;
      if (this.clear) {
        inputElement.classList.add('clear-btn');
      }
    }, 500);
  }

  emitEvent($event, eventCustomName: string) {
    this.inputFieldEvents.emit({ name: eventCustomName, originalEvent: $event });
  }

}
