import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
import { PasswordChecker } from './custom-validators/PasswordChecker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'signup-reactive-form';
  registerForm: FormGroup;
  submitted:boolean = false;
  
  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTandC: [false, Validators.requiredTrue]
    },{
      validators: PasswordChecker('password','confirmPassword')
    });
  }

  get form(){
    return this.registerForm.controls;
  }
  onSubmit(){
    this.submitted = true;
    if(this.registerForm.invalid){
      return " Please fill in the required fields";
    }

    console.table(this.registerForm.value);
    console.table(this.registerForm);

    alert(
      "Signed in successfully \n" + JSON.stringify(this.registerForm)
    );
  }

  onReset(){
    this.submitted = false;
    this.registerForm.reset();
  }

}
