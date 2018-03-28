import React from 'react'
import Link from 'gatsby-link'
import Carousel from '../../components/Carousel.js'

const WhatsOnYourMind = () => (
 <div className="doc-wrapper overlaid">

   <h2>Infinite Wishing</h2>

      <p className="doc-tags">
          July 2017
      </p>
      <p className="doc-tags">
          twitter bot, raspberry pi, receipt printer, acrylic basin
      </p>
          <p className="doc-tags">
              collaboration with <a href="https://www.rhaberstroh.com/">Rachel Haberstroh</a>
      </p>


      <p>
          The <a href="https://twitter.com/infinitewishing">@infinitewishing</a> twitter bot randomly
          selects a new tweet that has the words "I Wish" in it every 3 minutes and retweets it.
      </p>
      <p>
          The Infinite Wishing Well continuously prints @infinitewishing's real time feed into an acrylic wishing well filled with water.
      </p>
      <p>
          Images: Infinite Wishing Well in <a href="http://www.smalleditionsnyc.com/exhibitions/paperless-opening-friday-july-29th/"><span>Paperless</span> at Small Editions</a>, curated by Nicole Kaack, alongside artwork by Nyeema Morgan and Sujin Lee.
      </p>

   <div className="carousel-wrapper iw-carousel">
      <Carousel
        images={[
          '/mfowler/img/iw/iw1.jpg',
          '/mfowler/img/iw/iw2.jpg',
          '/mfowler/img/iw/iw3.jpg',
          '/mfowler/img/iw/iw4.jpeg',
        ]}
        carouselName="iw-carousel"
      />
   </div>

</div>
)

export default WhatsOnYourMind
