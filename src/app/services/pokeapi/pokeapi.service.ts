import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPokemonPage} from '../../interfaces/i-pokemon-page';
import {map} from 'rxjs/operators';
import {PokemonEntity} from '../../entity/pokemon.entity';
import {IPokeapiPage} from '../../interfaces/i-pokeapi-page';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  public constructor(private readonly _HTTP: HttpClient) {

  }

  public getPokemons(limit: number, offset: number): Observable<IPokemonPage> {
    const params: HttpParams = new HttpParams({
      fromObject: {
        limit: limit.toString(10),
        offset: offset.toString(10),
      }
    });
    return this._HTTP.get(`${environment.pokemonApi}/pokemon/`, {
      params
    }).pipe(map((page: IPokeapiPage) => {
      page.results = page.results.map((item) => new PokemonEntity(item));
      return page;
    }));
  }
}
