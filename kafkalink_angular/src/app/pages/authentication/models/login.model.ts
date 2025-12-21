export class login_api_model {
    message! : string
    user! : {
        access_token : string
        email : string
        name : string
        user_id : number
    } 
}