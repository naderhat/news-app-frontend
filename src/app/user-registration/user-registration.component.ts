import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { AuthenticationService, UserService, AlertService } from 'src/app/services';
import { first } from 'rxjs/internal/operators/first';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private authenticationService: AuthenticationService,
    private userService: UserService, private alertService: AlertService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      matchingPassword: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;

    this.userService.register(this.registerForm.value).pipe(first()).subscribe(data => {
      data['error'] !== '' ? this.alertService.error(data['error'], true) : this.alertService.success(data['message'], true);
      this.router.navigate(['/login']);
    },
      error => {
        this.alertService.error(error);
        this.loading = false;
      });
  }

}
