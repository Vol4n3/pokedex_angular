import {NgModule} from '@angular/core';
import {ListComponent} from '../components/list/list.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    CommonModule
  ]
})

export class SharedModule {

}
