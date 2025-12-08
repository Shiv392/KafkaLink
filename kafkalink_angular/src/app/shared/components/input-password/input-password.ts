import { Component, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [CommonModule, FormsModule, PasswordModule],
  templateUrl: './input-password.html',
  styleUrls: ['./input-password.scss'],
})
export class PasswordInputComponent implements ControlValueAccessor {

  @Input() label: string = '';
  @Input() placeholder?: string = '';

  value: any = '';
  disabled = false;

  // CVA callbacks
  onChange = (value: any) => {};
  onTouched = () => {};

  constructor(@Optional() @Self() public ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;  // NO circular DI
    }
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  get control() {
    return this.ngControl?.control;
  }
}
