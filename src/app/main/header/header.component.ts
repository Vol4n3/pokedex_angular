import {Component} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  public constructor(private _AUTH: AuthService) {

  }

  public get isLogged(): boolean {
    return this._AUTH.logged;
  }

  public get pseudo(): string {
    return this._AUTH.loggedPseudo;
  }

  public logout(): void {
    this._AUTH.logout();
  }
}
