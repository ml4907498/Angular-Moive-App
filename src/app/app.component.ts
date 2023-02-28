import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-header></app-header>
      <router-outlet></router-outlet>
      <!-- <app-home></app-home>
      <app-favorite></app-favorite> -->
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-movie-app';
}
