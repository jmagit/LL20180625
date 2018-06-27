import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { forwardRef, Directive, OnChanges, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[upperCase]',
  providers: [{provide: NG_VALIDATORS, useExisting: UpperCaseValidatorDirective, multi: true}]
})
export class UpperCaseValidatorDirective implements Validator {
  validate(control: AbstractControl): {[key: string]: any} {
    const valor = control.value;
    if (valor) {
      return valor !== valor.toUpperCase() ? {'upperCase': {valor}} : null;
    } else {
      return null;
    }
  }
}


export const MIN_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinValidator),
  multi: true
};

/**
 * A directive which installs the `MinValidator` for any `formControlName`,
 * `formControl`, or control with `ngModel` that also has a `min` attribute.
 *
 *
 */
@Directive({
  selector: '[min][formControlName],[min][formControl],[min][ngModel]',
  providers: [MIN_VALIDATOR],
  host: {'[attr.min]': 'min ? min : null'}
})
export class MinValidator implements Validator,
    OnChanges {
  private _validator: ValidatorFn;
  private _onChange: () => void;

  @Input() min: string;

  ngOnChanges(changes: SimpleChanges): void {
    if ('min' in changes) {
      this._createValidator();
      if (this._onChange) { this._onChange(); }
    }
  }

  validate(c: AbstractControl): ValidationErrors|null {
    return this.min == null ? null : this._validator(c);
  }

  registerOnValidatorChange(fn: () => void): void { this._onChange = fn; }

  private _createValidator(): void {
    this._validator = Validators.min(parseInt(this.min, 10));
  }
}

export const MAX_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxValidator),
  multi: true
};

/**
 * A directive which installs the `MaxValidator` for any `formControlName,
 * `formControl`,
 * or control with `ngModel` that also has a `max` attribute.
 *
 *
 */
@Directive({
  selector: '[max][formControlName],[max][formControl],[max][ngModel]',
  providers: [MAX_VALIDATOR],
  host: {'[attr.max]': 'max ? max : null'}
})
export class MaxValidator implements Validator,
    OnChanges {
  private _validator: ValidatorFn;
  private _onChange: () => void;

  @Input() max: string;

  ngOnChanges(changes: SimpleChanges): void {
    if ('max' in changes) {
      this._createValidator();
      if (this._onChange) { this._onChange(); }
    }
  }

  validate(c: AbstractControl): ValidationErrors|null {
    return this.max != null ? this._validator(c) : null;
  }

  registerOnValidatorChange(fn: () => void): void { this._onChange = fn; }

  private _createValidator(): void {
    this._validator = Validators.max(parseInt(this.max, 10));
  }
}

export const MIS_VALIDADORES = [UpperCaseValidatorDirective, MinValidator, MaxValidator];
