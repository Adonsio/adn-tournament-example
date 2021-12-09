import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchComponent } from './match/match.component';
import {AdnSingleEliminationTreeModule} from "@adonsio/adn-tournament";

@NgModule({
  declarations: [
    AppComponent,
    MatchComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AdnSingleEliminationTreeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
