import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {APP_ROUTES} from './app-routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
