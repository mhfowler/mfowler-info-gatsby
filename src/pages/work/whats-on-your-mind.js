import React from 'react'
import Link from 'gatsby-link'
import Carousel from '../../components/Carousel.js'

const WhatsOnYourMind = () => (
 <div className="doc-wrapper overlaid">

     <h2>What's On Your Mind?</h2>
        <p className="doc-tags">
            November 2017
        </p>
        <p className="doc-tags">
            website, zine, reading
        </p>
        <p className="doc-tags">
            collaboration with <a href="https://www.rhaberstroh.com/">Rachel Haberstroh</a>
        </p>
    <p>
        <span style={{"font-style":"italic"}}>What's On Your Mind?</span> is a collection of writing posted on Facebook in the week after the November 8, 2016 election.
    </p>
    <p>
        Project website: <a href="http://whats-on-your-mind.info">http://whats-on-your-mind.info</a>
    </p>
    <p>
        We also distributed a physical zine of the statuses and organized a reading of the statuses at <a href="https://babycastles.com/">Babycastles</a> in New York on November 8, 2017.
    </p>

   <div className="carousel-wrapper whats-carousel">
      <Carousel
        images={[
          '/mfowler/img/whats/whats1.png',
          '/mfowler/img/whats/whats2.png',
          '/mfowler/img/whats/whats3.jpg',
          '/mfowler/img/whats/whats4.jpg',
          '/mfowler/img/whats/whats5.jpg',
          '/mfowler/img/whats/whats6.jpg',
        ]}
        carouselName="iw-carousel"
      />
   </div>

</div>
)

export default WhatsOnYourMind
