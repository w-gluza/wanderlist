/**
 * Predefined Imports
 */
import { Component, Input } from '@angular/core';

/**
 * Component function takes in an object {} with 3 attributes: selector and templateUrl and StylesURL
 */
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  constructor() {}
  /**
   * Decorator that marks a class field as an input property and supplies configuration metadata
   */
  @Input() data;
}
