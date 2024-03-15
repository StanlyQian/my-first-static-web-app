import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>welcome Hello {{value}}</div>`,
})
export class AppComponent {
  value = 'World';
}
