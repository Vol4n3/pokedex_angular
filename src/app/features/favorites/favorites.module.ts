import {NgModule} from '@angular/core';
import {SharedModule} from '../../modules/shared.module';
import {FavoritesRoutingModule} from './favorites-routing.module';
import {FavoritesLayoutComponent} from './favorite-layout/favorites-layout.component';

@NgModule({
  declarations: [
    FavoritesLayoutComponent
  ],
  imports: [
    SharedModule,
    FavoritesRoutingModule
  ]
})
export class FavoritesModule {

}
