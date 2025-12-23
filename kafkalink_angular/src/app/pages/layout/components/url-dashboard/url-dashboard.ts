import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonTable } from '../../../../shared/components/common-table/common-table';
import { TableDataService } from '../../../../shared/services/table_data.service';
import { InputComponent } from '../../../../shared/components/input/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { URLService } from '../../services/url.service';
import { noWhiteSpaceValidator } from '../../../../shared/validators/nowhitespace.validator';
import { Button } from '../../../../shared/components/button/button';
import { url_data } from '../../models/urls.model';
import { NotificationService } from '../../../../shared/services/notification.service';

@Component({
  selector: 'app-url-dashboard',
  imports: [FormsModule, ReactiveFormsModule, CommonTable, InputComponent, Button],
  templateUrl: './url-dashboard.html',
  styleUrl: './url-dashboard.scss',
})
export class UrlDashboard implements OnInit, OnDestroy {

  public table_data_service = inject(TableDataService);
  public fb = inject(FormBuilder);
  public url_service = inject(URLService);
  public notification_service = inject(NotificationService);

  public subscription: Subscription = new Subscription();
  public subject = new Subject<boolean>();

  public loading: boolean = false;
  public url_form: FormGroup;

  public urls: url_data[] = [];

  constructor() {
    this.url_form = this.fb.group({
      url_input: ['', [Validators.required, noWhiteSpaceValidator()]]
    })
  }

  ngOnInit(): void {
    this.loading = true;
    this.get_urls();
  }

  public get_urls() {
    const subscribe = this.url_service.get_urls().subscribe({
      next: (res) => {
        this.urls = res.data
      },
      error: () => {

      }
    });
    this.subscription.add(subscribe);
  }

  public form_submit() {
    const apibody = {
      'url': this.url_form.value.url_input,
      'url_password': null
    }
    const subscribe = this.url_service.add_url(apibody).subscribe({
      next: (res) => {
        this.notification_service.notification_subject.next({ type: 'success', summary: 'Success', detail: res.message });
        this.url_form.reset();
        this.get_urls();
      },
      error: () => {

      }
    });
    this.subscription.add(subscribe);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
