import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class TableDataService {
    public table_data: { url_id: number, short_link: string, original_url: string, visited_count: number }[] = [
        { url_id: 1, short_link: 'fyn.ly/a1B2', original_url: 'https://www.google.com', visited_count: 245 },
        { url_id: 2, short_link: 'fyn.ly/c3D4', original_url: 'https://www.facebook.com', visited_count: 132 },
        { url_id: 3, short_link: 'fyn.ly/e5F6', original_url: 'https://www.youtube.com', visited_count: 987 },
        { url_id: 4, short_link: 'fyn.ly/g7H8', original_url: 'https://www.linkedin.com', visited_count: 421 },
        { url_id: 5, short_link: 'fyn.ly/i9J0', original_url: 'https://www.twitter.com', visited_count: 89 },
        { url_id: 6, short_link: 'fyn.ly/k1L2', original_url: 'https://www.github.com', visited_count: 764 },
        { url_id: 7, short_link: 'fyn.ly/m3N4', original_url: 'https://stackoverflow.com', visited_count: 1583 },
        { url_id: 8, short_link: 'fyn.ly/o5P6', original_url: 'https://www.medium.com', visited_count: 314 },
        { url_id: 9, short_link: 'fyn.ly/q7R8', original_url: 'https://www.reddit.com', visited_count: 276 },
        { url_id: 10, short_link: 'fyn.ly/s9T0', original_url: 'https://www.amazon.in', visited_count: 642 },
        { url_id: 11, short_link: 'fyn.ly/u1V2', original_url: 'https://www.netflix.com', visited_count: 854 },
        { url_id: 12, short_link: 'fyn.ly/w3X4', original_url: 'https://www.instagram.com', visited_count: 1290 },
        { url_id: 13, short_link: 'fyn.ly/y5Z6', original_url: 'https://www.flipkart.com', visited_count: 503 },
        { url_id: 14, short_link: 'fyn.ly/A7B8', original_url: 'https://www.apple.com', visited_count: 412 },
        { url_id: 15, short_link: 'fyn.ly/C9D0', original_url: 'https://www.microsoft.com', visited_count: 367 },
        { url_id: 16, short_link: 'fyn.ly/E1F2', original_url: 'https://www.npmjs.com', visited_count: 219 },
        { url_id: 17, short_link: 'fyn.ly/G3H4', original_url: 'https://angular.io', visited_count: 788 },
        { url_id: 18, short_link: 'fyn.ly/I5J6', original_url: 'https://react.dev', visited_count: 945 },
        { url_id: 19, short_link: 'fyn.ly/K7L8', original_url: 'https://nodejs.org', visited_count: 681 },
        { url_id: 20, short_link: 'fyn.ly/M9N0', original_url: 'https://vercel.com', visited_count: 156 }
    ]

    public get_dynamic_columns = (data: Record<string, any>, remove_column?: String[], add_column?: string) => {
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
            acc[key] = key == 'actions' ? 'Actions' : key == 'object_name' ? 'Name' : key == 'crm_availability' ? 'CRM Availability' : this.format_column_name(key);
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