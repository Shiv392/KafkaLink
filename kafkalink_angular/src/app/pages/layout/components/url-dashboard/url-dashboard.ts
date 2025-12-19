import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonTable } from '../../../../shared/components/common-table/common-table';
import { TableDataService } from '../../../../shared/services/table_data.service';
import { InputComponent } from '../../../../shared/components/input/input';
import { FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-url-dashboard',
  imports: [CommonTable, InputComponent],
  templateUrl: './url-dashboard.html',
  styleUrl: './url-dashboard.scss',
})
export class UrlDashboard implements OnInit, OnDestroy {
public table_data_service = inject(TableDataService);
public fb = inject(FormBuilder);

public subscription : Subscription = new Subscription();

constructor(){

}

ngOnInit(): void {
  
}

ngOnDestroy(): void {
  if(this.subscription){
    this.subscription.unsubscribe();
  } 
}
}
