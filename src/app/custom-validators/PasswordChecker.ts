import { FormGroup } from '@angular/forms';

export function PasswordChecker(controlName: string, confControlName: string){
    return (formGroup: FormGroup) => {
        const password = formGroup.controls[controlName];
        const confPassword = formGroup.controls[confControlName];
        if(password !== confPassword){
            confPassword.setErrors({ mustMatch: true});
        }else{
            confPassword.setErrors(null);
        }
    };
}