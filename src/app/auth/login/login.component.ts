import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loginSuccess } from '../store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {}

  login(): void {
    if (this.loginForm.valid) {
      this.store.dispatch(
        loginSuccess({
          username: this.loginForm.value.email,
          password: this.loginForm.value.password,
        })
      );
    }
    this.loginForm.valid
      ? this.router.navigateByUrl('shop')
      : this.loginForm.updateValueAndValidity();
  }
}
