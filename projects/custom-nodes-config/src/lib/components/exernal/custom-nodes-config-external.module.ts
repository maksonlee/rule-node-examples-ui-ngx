import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/public-api';
import { FirebaseConfigComponent } from './firebase-config.component';

@NgModule({
  declarations: [
    FirebaseConfigComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FirebaseConfigComponent
  ]
})
export class CustomNodesConfigExternalModule {
}
