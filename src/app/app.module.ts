import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ClickOutsideDirective } from './clickOutside';
import { HttpClientModule } from '@angular/common/http';
import { HeaderPartComponent } from './header-part/header-part.component';
import { MainPartComponent } from './main-part/main-part.component';
import { FooterPartComponent } from './footer-part/footer-part.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickOutsideDirective,
    HeaderPartComponent,
    MainPartComponent,
    FooterPartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
