import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/public-api';
import { FirebaseConfigComponent } from './firebase-config.component';
import { ThingsBoardConfigComponent } from './things-board-config.component';

@NgModule({
  declarations: [
    FirebaseConfigComponent,
    ThingsBoardConfigComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FirebaseConfigComponent,
    ThingsBoardConfigComponent
  ]
})
export class CustomNodesConfigExternalModule {
}
