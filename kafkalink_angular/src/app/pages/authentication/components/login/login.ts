import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Button } from '../../../../shared/components/button/button';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Subject, Subscription, throttleTime } from 'rxjs';
import { noWhiteSpaceValidator } from '../../../../shared/validators/nowhitespace.validator';
import { InputComponent } from '../../../../shared/components/input/input';
import { PasswordInputComponent } from '../../../../shared/components/input-password/input-password';
import { NotificationService } from '../../../../shared/services/notification.service';
import { login_api_model } from '../../models/login.model';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ReactiveFormsModule,Button, InputComponent, PasswordInputComponent],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit, OnDestroy {

public login_service = inject(LoginService);
public fb = inject(FormBuilder);
public notification_service = inject(NotificationService);

public subscription : Subscription = new Subscription();
public login_form : FormGroup;

public subject  = new Subject<boolean>();
public loading : boolean = false;

public login_api_model = new login_api_model();

constructor(){
  this.login_form = this.fb.group({
    email : ['', [Validators.required, Validators.email, noWhiteSpaceValidator()]],
    password : ['', [Validators.required]]
  })
}

ngOnInit(): void {
  const subscribe = this.subject.pipe(throttleTime(3000)).subscribe(res=>{
    if(res){
      this.login();
    }
  });
  this.subscription.add(subscribe);
}

public save_login(){
  if(this.login_form.valid){
    this.subject.next(true);
  }
}

public login(){
const apibody = {
  'email' : this.login_form.value.email,
  'password' : this.login_form.value.password
}
const subscribe = this.login_service.login(apibody).subscribe(res=>{
this.login_api_model = res;
this.notification_service.notification_subject.next({type : 'success', summary : 'Success', detail : this.login_api_model.message})
});
this.subscription.add(subscribe);
}

public btn_event(event : string){
if(event){
  this.subject.next(true);
}
}

ngOnDestroy(): void {
  this.subscription.unsubscribe();
}
}
