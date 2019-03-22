/**
 * Predefined Imports
 */
import { Component } from '@angular/core';
/**
 * Component function takes in an object {} with 3 attributes: selector, templateUrl and StylesURL
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * We declare here title variable that later on we are using with string interpolation
   * that will allow us to output this property dynamically into html {{title}}
   */
  title = 'wanderlist';
  /**
   * onClick event handler
   */
  onClick($event) {
    console.log('Clicked', $event);
  }
}
