import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ContactComponent } from './contact/contact.component';
import { DigitalArtComponent } from './digital-art/digital-art.component';
import { FooterComponent } from './footer/footer.component';
import { GraphicDesginComponent } from './graphic-desgin/graphic-desgin.component';
import { HomeComponent } from './home/home.component';
import { IllustationsComponent } from './illustations/illustations.component';
import { InDesignComponent } from './in-design/in-design.component';
import { PaintingsComponent } from './paintings/paintings.component';

const routes: Routes = [
{

path:'',
component:HomeComponent
},


{
  path:'contact',
  component:ContactComponent
},


{
  path: 'graphic-design',
  component: GraphicDesginComponent
},


  {
    path: 'InDesign',
    component: InDesignComponent
  },

 
  {
    path: 'DigitalArt',
    component: DigitalArtComponent
  },
 

  {
    path: 'Illustrations',
    component:IllustationsComponent
  },

  {
    path: 'Paintings',
    component: PaintingsComponent
  },


  {
    path: 'AboutMe',
    component: AboutMeComponent
  },

  {
    path: 'ContactMe',
    component: ContactMeComponent
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
