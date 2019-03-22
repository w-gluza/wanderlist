/**
 * Predefined Imports
 */
import { Component, Input } from '@angular/core';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
/**
 * Component decorator
 */
@Component({
  selector: 'app-rating',
  templateUrl: 'rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  /**
   * adding / asigning icon from Font Awesome libary
   */
  faMapMarkerAlt = faMapMarkerAlt;
  /**
   * rating-value as input.
   */
  @Input('rating-value') rating = 0;
  /**
   * numberOfReviews as input.
   */
  @Input() numOfReviews = 0;
  /**
   * onClick event handler
   */
  onClick(ratingValue) {
    this.rating = ratingValue;
  }
}
