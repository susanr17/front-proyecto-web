import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent {
  usuario: string = '';
  contrasenia: string = '';

  constructor(private loginService: LoginService,
              private tokenService: TokenService,
              private router: Router,
              public snackBar: MatSnackBar) { }

  login() {
    if(this.usuario !== '' && this.contrasenia !== ''){

      const contraseñaCifrada = btoa(this.contrasenia);
      this.loginService.login(this.usuario, contraseñaCifrada).subscribe(
        response => {
         this.tokenService.saveTokenAndRol(response.token, response.rol, response.username);
         this.snackBar.open(response.mensaje, 'Cerrar', {
          duration: 2000,
        });
         this.router.navigate(['/home']);
  
        },
        error => {
          if (error.error && error.error.mensaje) {
            this.snackBar.open(error.error.mensaje, 'Cerrar', {
              duration: 2000,
            });
          }
        }
      );
    } else {
      this.snackBar.open('Ingrese sus credenciales', 'Cerrar', {
        duration: 2000,
      });
    }
  
  }
}
