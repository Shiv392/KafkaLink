export interface get_urls_apimodel {
    message: string
    data: url_data[]
}

export interface url_data {
    url_id: number,
    short_code: string,
    url: string,
    updated: string,
    visited_count: number
}

export interface post_url_apimodel{
 message : string   
}