import { Component, inject } from '@angular/core';
import { CommonTable } from '../../../../shared/components/common-table/common-table';
import { TableDataService } from '../../../../shared/services/table_data.service';

@Component({
  selector: 'app-url-dashboard',
  imports: [CommonTable],
  templateUrl: './url-dashboard.html',
  styleUrl: './url-dashboard.scss',
})
export class UrlDashboard {
public table_data_service = inject(TableDataService);
}
