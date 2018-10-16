import {NgModule} from '@angular/core';
import {PokedexLayoutComponent} from './pokedex-layout/pokedex-layout.component';
import {PokedexRoutingModule} from './pokedex-routing.module';
import {SharedModule} from '../../modules/shared.module';

@NgModule({
  declarations: [
    PokedexLayoutComponent,
  ],
  imports: [
    PokedexRoutingModule,
    SharedModule,
  ]
})
export class PokedexModule {

}
