import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app.material.module';

import { ChatComponent } from './chat/chat.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppMaterialModule
  ],
  exports: [
    ChatComponent
  ],
  declarations: [
    ChatComponent
  ]
})
export class ComponentsModule { }
