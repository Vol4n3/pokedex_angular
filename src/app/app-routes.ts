import {Routes} from '@angular/router';
import {HomeComponent} from './main/home/home.component';
import {IsAuthGuard} from './services/guards/isAuth.guard';

export const APP_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '', component: HomeComponent
      }, {
        path: 'pokedex', loadChildren: './features/pokedex/pokedex.module#PokedexModule'
      },
      {
        path: 'favorites',
        canActivate: [IsAuthGuard],
        canActivateChild: [IsAuthGuard],
        loadChildren: './features/favorites/favorites.module#FavoritesModule'
      },

      {
        path: 'auth', loadChildren: './features/auth/auth.module#AuthModule'
      }
    ],
  }
];
