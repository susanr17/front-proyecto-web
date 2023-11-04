import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class RolGuard implements CanActivate {

  constructor (public snackBar: MatSnackBar){

}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      const rol = localStorage.getItem('rol');
      if(rol === 'ADMINISTRADOR'){
        return true;
      } else {
        this.snackBar.open('No tienes acceso a este módulo', 'Cerrar', {
          duration: 2000,
        });
        return false;
      }
  }
  
}
