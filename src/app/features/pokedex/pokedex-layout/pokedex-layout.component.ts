import {Component, OnDestroy, OnInit} from '@angular/core';
import {PokeapiService} from '../../../services/pokeapi/pokeapi.service';
import {Subscription} from 'rxjs';
import {PokemonEntity} from '../../../entity/pokemon.entity';
import {AuthService} from '../../../services/auth/auth.service';
import {StorageHelper} from '../../../helpers/storage-helper';
import {IPokemon} from '../../../interfaces/i-pokemon';

@Component({
  templateUrl: './pokedex-layout.component.html'
})
export class PokedexLayoutComponent implements OnInit, OnDestroy {
  public pokemons: PokemonEntity[] = [];
  public pokemonsPage: PokemonEntity[] = [];
  public currentPage = 0;
  public numbersItemShow = 10;
  public maxPokemon = 50;
  private subscription$: Subscription;

  public constructor(private _POKEAPI: PokeapiService, private _AUTH: AuthService) {
  }

  public ngOnInit(): void {
    this.initPokemons();
  }

  public get isLogged(): boolean {
    return this._AUTH.logged;
  }

  public toggleFavorite(pokemon: PokemonEntity): void {
    if (!this.isLogged) {
      return;
    }
    pokemon.toggleFavorite();
    this.updateFavoritePokemon(pokemon);
  }

  public updateFavoritePokemon(pokemon: PokemonEntity): void {
    const ACTUAL_FAVORITES: IPokemon[] = StorageHelper.favoritesPokemons;
    const INDEX: number = ACTUAL_FAVORITES.findIndex((p) => p.name === pokemon.name);
    if (INDEX < 0) {
      ACTUAL_FAVORITES.push(pokemon.serialize());
    } else {
      ACTUAL_FAVORITES.splice(INDEX, 1);
    }
    StorageHelper.favoritesPokemons = ACTUAL_FAVORITES;
  }

  public ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  public initPokemons(): void {
    this.subscription$ = this._POKEAPI.getPokemons(10, 0).subscribe((res) => {
      // TODO: limit and offset are not working in the PokeApi
      this.pokemons = res.results.slice(0, this.maxPokemon);
      this.pokemonsPage = this.getPokemonsAtPage();
      this.selectFavoritesPokemons();
    });
  }

  public getPokemonsAtPage(): PokemonEntity[] {
    return this.pokemons.slice(this.currentPage * this.numbersItemShow, this.currentPage * this.numbersItemShow + this.numbersItemShow);
  }

  public nextPage(): void {
    this.currentPage++;
    this.pokemonsPage.push(...this.getPokemonsAtPage());
    this.selectFavoritesPokemons();
  }

  public selectFavoritesPokemons() {
    if (!StorageHelper.favoritesPokemons) {
      StorageHelper.favoritesPokemons = [];
    }
    this.pokemonsPage.map((pokemon: PokemonEntity) => {
      pokemon.isFavorite = StorageHelper.favoritesPokemons.some((p) => p.name === pokemon.name);
    });
  }
}
