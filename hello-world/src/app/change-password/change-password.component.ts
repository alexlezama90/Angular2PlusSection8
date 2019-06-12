import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PasswordValidators } from '../common/validators/password.validators';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  changePasswordForm: FormGroup;
  // changePasswordForm = new FormGroup({
  //   oldPassword: new FormControl('',
  //     Validators.required,
  //     PasswordValidators.validOldPassword
  //   ),
  //   newPassword: new FormControl('',
  //     Validators.required
  //   ),
  //   confirmPassword: new FormControl('',
  //     Validators.required
  //   )
  // },
  //   PasswordValidators.passwordsShouldMatch
  // )

  constructor(fb: FormBuilder) {
    this.changePasswordForm = fb.group({
      oldPassword: ['',
        Validators.required,
        PasswordValidators.validOldPassword
      ],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
        // validators: PasswordValidators.MustMatch('newPassword', 'confirmPassword')
        validator: PasswordValidators.passwordsShouldMatch
      })
  }

  get oldPassword() {
    return this.changePasswordForm.get('oldPassword');
  }

  get newPassword() {
    return this.changePasswordForm.get('newPassword');
  }

  get confirmPassword() {
    return this.changePasswordForm.get('confirmPassword');
  }

}
