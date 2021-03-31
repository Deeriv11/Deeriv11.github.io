import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { GraphicDesginComponent } from './graphic-desgin/graphic-desgin.component';
import { InDesignComponent } from './in-design/in-design.component';
import { DigitalArtComponent } from './digital-art/digital-art.component';
import { IllustationsComponent } from './illustations/illustations.component';
import { PaintingsComponent } from './paintings/paintings.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    GraphicDesginComponent,
    InDesignComponent,
    DigitalArtComponent,
    IllustationsComponent,
    PaintingsComponent,
    AboutMeComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
