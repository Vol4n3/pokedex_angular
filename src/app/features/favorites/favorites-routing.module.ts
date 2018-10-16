import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FAVORITES_ROUTES} from './favorites-routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FAVORITES_ROUTES)
  ],
  exports: [RouterModule],
})
export class FavoritesRoutingModule {

}
