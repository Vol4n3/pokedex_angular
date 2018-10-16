import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  templateUrl: './login-layout.component.html'
})
export class LoginLayoutComponent implements OnInit {
  public loginForm: FormGroup;

  public constructor(private readonly _FB: FormBuilder, private readonly _AUTH: AuthService) {

  }

  public submit() {
    if (!this.loginForm.valid) {
      return;
    }
    this._AUTH.login(this.loginForm.get('pseudo').value);
  }

  public ngOnInit(): void {
    this.loginForm = this._FB.group({
      pseudo: ['', Validators.required]
    });
  }

}
