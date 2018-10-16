import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {POKEDEX_ROUTES} from './pokedex-routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(POKEDEX_ROUTES)
  ],
  exports: [RouterModule],
})
export class PokedexRoutingModule {

}
