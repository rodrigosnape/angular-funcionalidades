import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  private readonly _authService = inject(AuthService);
  private readonly _router = inject(Router);

  onLogin() {
    console.log(this.loginForm.value.username, this.loginForm.value.password);

    // Promise pode ser utilizada. 
    // Neste caso o Observable recebido é convertido em Promise.
/*     firstValueFrom(this._authService.login(this.loginForm.value.username, this.loginForm.value.password))
    .then((token) => { console.log('token', token)})
    .catch((error) => { console.log('error', error)}); */

    //Original Observable
     this._authService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe({
      next: (_) => {
        this._router.navigate(['dashboard'])
      },
      error: (error) => {
        console.log(error);
        const UNAUTHORIZED_CREDENTIALS_ERROR = 401;

        if(error.status === UNAUTHORIZED_CREDENTIALS_ERROR) {
          this.loginForm.setErrors({ invalidCredentials: true });
        } else {
          this.loginForm.setErrors({ generalCredentialsError: true });
        }
      }
    });
  }
}
