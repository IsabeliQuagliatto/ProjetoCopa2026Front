import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { StickerComponent } from './sticker/sticker.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StickerComponent,
    HomeComponentComponent,
    FooterComponentComponent,
    NavBarComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    provideHttpClient()],
  bootstrap: [AppComponent]
})

export class AppModule { }


