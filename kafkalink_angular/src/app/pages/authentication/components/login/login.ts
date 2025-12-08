import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Button } from '../../../../shared/components/button/button';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Subscription } from 'rxjs';
import { noWhiteSpaceValidator } from '../../../../shared/validators/nowhitespace.validator';
import { InputComponent } from '../../../../shared/components/input/input';
import { PasswordInputComponent } from '../../../../shared/components/input-password/input-password';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ReactiveFormsModule,Button, InputComponent, PasswordInputComponent],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit, OnDestroy {

public login_service = inject(LoginService);
public fb = inject(FormBuilder);

public subscription : Subscription = new Subscription();
public login_form : FormGroup;

constructor(){
  this.login_form = this.fb.group({
    email : ['', [Validators.required, Validators.email, noWhiteSpaceValidator(), Validators.pattern('^(https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*))$')]],
    password : ['', [Validators.required, noWhiteSpaceValidator()]]
  })
}

ngOnInit(): void {
  
}

ngOnDestroy(): void {
  this.subscription.unsubscribe();
}
}
