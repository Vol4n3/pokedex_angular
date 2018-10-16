import {Injectable} from '@angular/core';
import {StorageHelper} from '../../helpers/storage-helper';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private readonly _ROUTER: Router) {
  }

  public get logged(): boolean {
    return !!StorageHelper.savedUser;
  }

  public get loggedPseudo(): string {
    return StorageHelper.savedUser.pseudo;
  }

  public login(pseudo: string) {
    StorageHelper.savedUser = {pseudo};
    this._ROUTER.navigate(['/favorites']).catch(() => {
      // error
    });
  }

  public logout() {
    StorageHelper.savedUser = null;
    this._ROUTER.navigate(['/']).catch(() => {
      // error
    });
  }
}
