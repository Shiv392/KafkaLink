import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function noWhiteSpaceValidator() : ValidatorFn{
    return (control : AbstractControl) : ValidationErrors | null =>{
        const value = control.value || '';
        const iswhilte_space = value.trim().length == 0 ;
        return iswhilte_space ? {whitespace : true} : null
    }
}