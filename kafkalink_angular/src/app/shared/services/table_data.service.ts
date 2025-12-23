import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class TableDataService {
    
    public get_dynamic_columns = (data: Map<String, any>, remove_column?: String[], add_column?: string) => {
        let display_columns: string[] = [];
        let column_labels: { [key: string]: string } = {};
        const first_node = data;
        const all_keys = Object.keys(first_node);

        //remove unwanted columns from the table------------>
        const to_delete = new Set(remove_column);
        display_columns = all_keys.filter(ele => !to_delete.has(ele));

        // Add custom column
        add_column != '' && display_columns.push(add_column || '');

        column_labels = display_columns.reduce((acc, key) => {
            acc[key] = key == 'actions' ? 'Actions'  : this.format_column_name(key);
            return acc;
        }, {} as { [key: string]: string });

        return { display_columns, column_labels };
    }

    public format_column_name = (key: string): string => {
        return key
            .replace(/_/g, ' ')                    // snake_case → snake case
            .replace(/([a-z])([A-Z])/g, '$1 $2')   // camelCase → camel Case
            .replace(/\b\w/g, char => char.toUpperCase());  // Title Case
    }
}