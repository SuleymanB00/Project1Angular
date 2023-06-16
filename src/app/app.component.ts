import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl:'./app.component.html',
  styleUrls:[`
  header{
    background:forestgreen;
  }
  `]
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular2';
}
