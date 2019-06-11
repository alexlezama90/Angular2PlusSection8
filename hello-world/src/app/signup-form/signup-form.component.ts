import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    // username: new FormControl('', Validators.required), //or FormGroup
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace //Custom Validator
    ]),
    password: new FormControl('', Validators.required)
  });

  get username(){ //with this properties we can access directly the control from the view
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }
}
