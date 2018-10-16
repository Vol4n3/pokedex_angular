import {IPokemon} from '../interfaces/i-pokemon';

export class PokemonEntity implements IPokemon {
  public name = '';
  public url = '';
  public isFavorite = false;

  public get id(): string {
    const re: RegExpExecArray = /\/([\d]*)\/$/.exec(this.url);
    return re[1];
  }

  public get imageUrl(): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ this.id }.png`;
  }

  public constructor(data?: IPokemon) {
    Object.assign(this, data);
  }

  public serialize(): IPokemon {
    return {
      name: this.name,
      url: this.url
    };
  }

  public toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }
}
