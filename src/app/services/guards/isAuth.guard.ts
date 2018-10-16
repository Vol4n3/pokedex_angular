import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IsAuthGuard implements CanActivate, CanActivateChild {
  public constructor(private readonly _AUTH: AuthService, private readonly _ROUTER: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.isAllowed(route, state);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.isAllowed(childRoute, state);
  }

  private isAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this._AUTH.logged) {
      return true;
    }
    this._ROUTER.navigate(['/auth/login']).catch(() => {
      // error handling
    });
    return false;
  }
}
