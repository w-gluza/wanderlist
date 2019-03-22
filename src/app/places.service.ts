/**
 * a service class Places that is responsible for returning a list of places/countries.
 */
export class PlacesService {
  /**
   * an array of places objects
   */
  getPlaces() {
    return [
      {
        country: 'Australia',
        continent: 'Oceania',
        rating: 4,
        numOfReviews: 3,
        img: '../assets/img/Australia.jpg',
        imgAlt: 'Australia picture',
        description:
          // tslint:disable-next-line: max-line-length
          'Australia, the smallest continent and one of the largest countries on Earth, lying between the Pacific and Indian oceans in the Southern Hemisphere. Australia’s capital is Canberra, located in the southeast between the larger and more important economic and cultural centres of Sydney and Melbourne. Australia has been called “the Oldest Continent,” “the Last of Lands,” and “the Last Frontier.”'
      },
      {
        country: 'Canada',
        continent: 'North America',
        rating: 4,
        numOfReviews: 5,
        img: '../assets/img/Canada.jpg',
        imgAlt: 'Canada picture',
        description:
          // tslint:disable-next-line: max-line-length
          'Canada, second largest country in the world in area (after Russia), occupying roughly the northern two-fifths of the continent of North America. Although Canadians are comparatively few in number, however, they have crafted what many observers consider to be a model multicultural society, welcoming immigrant populations from every other continent. In addition, Canada harbours and exports a wealth of natural resources and intellectual capital equaled by few other countries.'
      },
      {
        country: 'Norway',
        continent: 'Europe',
        rating: 4,
        numOfReviews: 4,
        img: '../assets/img/Norway.jpg',
        imgAlt: 'Norway picture',
        description:
          // tslint:disable-next-line: max-line-length
          'Norway, country of northern Europe that occupies the western half of the Scandinavian peninsula. Nearly half of the inhabitants of the country live in the far south, in the region around Oslo, the capital. About two-thirds of Norway is mountainous, and off its much-indented coastline lie, carved by deep glacial fjords, some 50,000 islands.'
      },
      {
        country: 'Vietnam',
        continent: 'Asia',
        rating: 4,
        numOfReviews: 2,
        img: '../assets/img/Vietnam.jpg',
        imgAlt: 'Vietnam picture',
        description: 'Red'
      },
      {
        country: 'Argentina',
        continent: 'South America',
        rating: 4,
        numOfReviews: 6,
        img: '../assets/img/Argentina.jpg',
        imgAlt: 'Argentina picture',
        description:
          // tslint:disable-next-line: max-line-length
          'Argentina, country of South America, covering most of the southern portion of the continent. The world’s eighth largest country, Argentina occupies an area more extensive than Mexico and the U.S. state of Texas combined. It encompasses immense plains, deserts, tundra, and forests, as well as tall mountains, rivers, and thousands of miles of ocean shoreline. Argentina also claims a portion of Antarctica, as well as several islands in the South Atlantic, including the British-ruled Falkland Islands'
      },
      {
        country: 'Kenya',
        continent: 'Africa',
        rating: 4,
        numOfReviews: 3,
        img: '../assets/img/Kenya.jpg',
        imgAlt: 'Kenya picture',
        description:
          // tslint:disable-next-line: max-line-length
          'Kenya, country in East Africa famed for its scenic landscapes and vast wildlife preserves. Its Indian Ocean coast provided historically important ports by which goods from Arabian and Asian traders have entered the continent for many centuries. Along that coast, which holds some of the finest beaches in Africa, are predominantly Muslim Swahili cities such as Mombasa, a historic centre that has contributed much to the musical and culinary heritage of the country. '
      }
    ];
  }
}
