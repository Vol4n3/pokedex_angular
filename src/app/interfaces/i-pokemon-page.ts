import {IPokeapiPage} from './i-pokeapi-page';
import {IPokemon} from './i-pokemon';
import {PokemonEntity} from '../entity/pokemon.entity';

export interface IPokemonPage extends IPokeapiPage {
  results: PokemonEntity[];
}
