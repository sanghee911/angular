import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Schoolofweb.net';
  obj = {
    name: 'Sanghee',
    age: 42
  };
  members = ['Sanghee', 'Atsuko', 'Pink'];
}
