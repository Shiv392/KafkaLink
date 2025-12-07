import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Button } from '../../../../shared/components/button/button';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Subscription } from 'rxjs';
import { noWhiteSpaceValidator } from '../../../../shared/validators/nowhitespace.validator';
import { InputComponent } from '../../../../shared/components/input/input';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ReactiveFormsModule,Button, InputComponent],
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
    email : ['', [Validators.required, noWhiteSpaceValidator()]],
    password : ['', [Validators.required, noWhiteSpaceValidator()]]
  })
}

ngOnInit(): void {
  
}

ngOnDestroy(): void {
  this.subscription.unsubscribe();
}
}
