import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonTable } from '../../../../shared/components/common-table/common-table';
import { TableDataService } from '../../../../shared/services/table_data.service';
import { InputComponent } from '../../../../shared/components/input/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { URLService } from '../../services/url.service';
import { noWhiteSpaceValidator } from '../../../../shared/validators/nowhitespace.validator';
import { Button } from '../../../../shared/components/button/button';

@Component({
  selector: 'app-url-dashboard',
  imports: [FormsModule, ReactiveFormsModule,CommonTable, InputComponent, Button],
  templateUrl: './url-dashboard.html',
  styleUrl: './url-dashboard.scss',
})
export class UrlDashboard implements OnInit, OnDestroy {
public table_data_service = inject(TableDataService);
public fb = inject(FormBuilder);
public url_service = inject(URLService);

public subscription : Subscription = new Subscription();

public loading : boolean = false;
public url_form : FormGroup;

constructor(){
this.url_form = this.fb.group({
  url_input : ['', [Validators.required, noWhiteSpaceValidator()]]
})
}

ngOnInit(): void {
this.loading = true;
const subscribe = this.url_service.get_urls().subscribe(res=>{
  console.log('res---->', res);
});
this.subscription.add(subscribe);
}

public form_submit(){
  console.log('form value--->', this.url_form.value)
}

ngOnDestroy(): void {
  if(this.subscription){
    this.subscription.unsubscribe();
  } 
}
}
