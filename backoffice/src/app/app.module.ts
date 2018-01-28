import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ChatService } from './services/chat.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    ChatService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
