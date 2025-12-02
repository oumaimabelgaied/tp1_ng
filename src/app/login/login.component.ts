import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = signal('');
  password = signal('');

  emailTouched = signal(false);
  passwordTouched = signal(false);
  showPassword = signal(false);
  isLoading = signal(false);

  constructor(private toastr: ToastrService, private router: Router) {}

  isEmailValid(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email());
  }

  isEmailTouched(): boolean {
    return this.emailTouched();
  }

  isEmailInvalid(): boolean {
    return this.isEmailTouched() && !this.isEmailValid();
  }

  isPasswordValid(): boolean {
    return this.password().length >= 4;
  }

  isPasswordTouched(): boolean {
    return this.passwordTouched();
  }

  isPasswordInvalid(): boolean {
    return this.isPasswordTouched() && !this.isPasswordValid();
  }

  isFormValid(): boolean {
    return this.isEmailValid() && this.isPasswordValid();
  }

  onEmailBlur() {
    this.emailTouched.set(true);
  }

  onEmailFocus() {
    this.emailTouched.set(true);
  }

  onPasswordBlur() {
    this.passwordTouched.set(true);
  }

  onPasswordFocus() {
    this.passwordTouched.set(true);
  }

  togglePasswordVisibility() {
    this.showPassword.update((val) => !val);
  }

  onSubmit() {
    if (this.isFormValid()) {
      this.isLoading.set(true);
      setTimeout(() => {
        this.toastr.success(
          `Bienvenue ${this.email()}!`,
          'Authentification réussie',
          { timeOut: 3000 }
        );
        this.router.navigate(['/cv']);
        this.resetForm();
      }, 1500);
    } else {
      this.toastr.error(
        'Veuillez remplir correctement tous les champs',
        'Erreur de validation'
      );
    }
  }

  resetForm() {
    this.email.set('');
    this.password.set('');
    this.emailTouched.set(false);
    this.passwordTouched.set(false);
    this.showPassword.set(false);
    this.isLoading.set(false);
  }
}
