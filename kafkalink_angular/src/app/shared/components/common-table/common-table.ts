import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TableDataService } from '../../services/table_data.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-common-table',
  imports: [CommonModule, FormsModule,TableModule],
  templateUrl: './common-table.html',
  styleUrl: './common-table.scss'
})
export class CommonTable implements OnInit, OnChanges {

  public table_data_servie = inject(TableDataService);

  @Input() table_data?: any[] = [];

  public display_columns: string[] = [];
  public column_labels: { [key: string]: string } = {};

  public table_values :any[] = [];

  constructor(){}

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['table_data']){
      if(this.table_data){
        this.table_values = [...this.table_data];
        const {column_labels, display_columns} = this.table_data_servie.get_dynamic_columns(this.table_values[0], ['url_id','updated'], 'Actions');
        this.column_labels = column_labels;
        this.display_columns = display_columns;
      }
    }
  }

  ngOnInit(): void {
  }
}
