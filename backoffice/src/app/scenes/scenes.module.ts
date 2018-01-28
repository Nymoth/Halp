import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

import { LobbyComponent } from './lobby/lobby.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    LobbyComponent
  ],
  declarations: [
    LobbyComponent
  ]
})
export class ScenesModule { }
