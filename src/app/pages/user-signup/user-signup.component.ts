import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-singup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  signup() {
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;
    this.auth.siginUp(email, password)
      .then((x) => {
        this.router.navigate(['/']);
      });
  }
}
