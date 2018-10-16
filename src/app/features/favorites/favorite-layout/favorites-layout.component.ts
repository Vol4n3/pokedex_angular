import {Component, OnInit} from '@angular/core';
import {PokemonEntity} from '../../../entity/pokemon.entity';
import {StorageHelper} from '../../../helpers/storage-helper';
import {IPokemon} from '../../../interfaces/i-pokemon';

@Component({
  templateUrl: './favorites-layout.component.html'
})
export class FavoritesLayoutComponent implements OnInit {
  public favoritesPokemons: PokemonEntity[] = [];

  public ngOnInit(): void {
    this.favoritesPokemons = StorageHelper.favoritesPokemons.map((pokemon: IPokemon) => new PokemonEntity(pokemon));
  }
}
