import {NgModule} from '@angular/core';
import {SharedModule} from '../../modules/shared.module';
import {LoginLayoutComponent} from './login-layout/login-layout.component';
import {AuthRoutingModule} from './auth-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    LoginLayoutComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule {

}
