/**
 * Predefined Imports
 */
import { Component } from '@angular/core';
import { PlacesService } from '../places.service';

/**
 * Component function takes in an object {} with 4 attributes: selector, templateUrl, StylesURL and Providers
 */
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  providers: [PlacesService]
})
export class CardsComponent {
  /**
   * The ngFor loops through places array as retrieved from PlacesService and inputs
   * each data element in the places array for each card component.
   */
  places;
  /**
   * I import PlacesService and declare it in the providers array to specify that we
   * depend on PlacesService as a service provider.
   */
  constructor(placesService: PlacesService) {
    /**
     * getPlaces method in Places Service will be called by CardsComponent
     */
    this.places = placesService.getPlaces();
  }
}
