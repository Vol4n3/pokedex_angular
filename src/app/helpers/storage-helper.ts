import {IPokemon} from '../interfaces/i-pokemon';

export class StorageHelper {
  private static readonly _POKEMONS_KEY: string = 'pokemons';
  private static readonly _USER_KEY: string = 'user';


  public static get savedUser(): { pseudo: string } {
    return this.getJsonItem<{ pseudo: string }>(this._USER_KEY);
  }

  public static set savedUser(user: { pseudo: string }) {
    this.setJsonItem(this._USER_KEY, user);
  }

  public static get favoritesPokemons(): IPokemon[] {
    return this.getJsonItem<IPokemon[]>(this._POKEMONS_KEY);
  }

  public static set favoritesPokemons(pokemons: IPokemon[]) {
    this.setJsonItem(this._POKEMONS_KEY, pokemons);
  }

  private static setJsonItem(key: string, json: any, session?: boolean): boolean {
    if (!json) {
      sessionStorage.removeItem(key);
      localStorage.removeItem(key);
      return true;
    }
    try {
      if (session) {
        sessionStorage.setItem(key, JSON.stringify((json)));
        return true;
      }
      localStorage.setItem(key, JSON.stringify(json));
      return true;
    } catch (e) {
      return false;
    }
  }

  private static getJsonItem<T>(key: string, session?: boolean): T {
    let item_string: string;
    if (session) {
      item_string = sessionStorage.getItem(key);
    } else {
      item_string = localStorage.getItem(key);
    }
    let parse: T;
    if (item_string) {
      try {
        parse = JSON.parse(item_string) as T;
      } catch (e) {
        sessionStorage.removeItem(key);
        localStorage.removeItem(key);
      }
    }
    return parse;
  }
}
