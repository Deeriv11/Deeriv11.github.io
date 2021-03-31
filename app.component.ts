import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--header-->
    <app-header></app-header>



    <!--routes get injected here-->
    <router-outlet></router-outlet>
   
    <!--footer--> 
    <app-footer></app-footer>
    <app-contact></app-contact>
   
  
    `, 
  styles: []
})
export class AppComponent {
  title = 'my-et720-midterm';
}
