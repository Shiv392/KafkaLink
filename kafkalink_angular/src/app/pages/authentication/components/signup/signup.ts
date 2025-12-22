import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignupService } from '../../services/signup.service';
import { Subject, Subscription, throttleTime } from 'rxjs';
import { noWhiteSpaceValidator } from '../../../../shared/validators/nowhitespace.validator';
import { NotificationService } from '../../../../shared/services/notification.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup implements OnInit, OnDestroy {

  public fb = inject(FormBuilder);
  public signup_service = inject(SignupService);
  public notification_service = inject(NotificationService);

  public subscription: Subscription = new Subscription();

  public signup_form: FormGroup;

  public subject = new Subject<boolean>();

  constructor() {
    this.signup_form = this.fb.group({
      name: ['', [Validators.required, noWhiteSpaceValidator()]],
      email: ['', [Validators.required, noWhiteSpaceValidator()]],
      password: ['', [Validators.required, noWhiteSpaceValidator()]]
    })
  }

  ngOnInit(): void {
    const subscribe = this.subject.pipe(throttleTime(3000)).subscribe(event => {
      if (event) {
        this.signup();
      }
    });
    this.subscription.add(subscribe);
  }

  public signup() {
    const apibody = {
      'name': this.signup_form.value.name,
      'email': this.signup_form.value.email,
      'password': this.signup_form.value.password
    }
    const subscribe = this.signup_service.signup(apibody).subscribe({
      next: (res) => {
          this.notification_service.notification_subject.next({ type: 'success', detail: res.message, summary: 'Success' });
      },
      error: () => {

      }
    });
    this.subscription.add(subscribe);
  }

  public save() {
    if (this.signup_form.valid) {
      this.subject.next(true);
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
