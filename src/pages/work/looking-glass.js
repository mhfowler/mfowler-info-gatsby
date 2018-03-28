import React from 'react'
import Link from 'gatsby-link'

const LookingGlass = () => (
  <div className="doc-wrapper overlaid">
    <h2>Looking Glass</h2>

    <p className="doc-tags">
        June 2017
    </p>

    <p className="doc-tags" style={{"margin-bottom": "30px"}}>
        broken mirror, openframeworks, projection mapping
    </p>

    <iframe src="https://player.vimeo.com/video/227833557?autoplay=1" width="750" height="422" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

    <p style={{"margin-top": "50px"}}>
        <span className="italic">Looking Glass</span> was exhibited at <a href="http://acudmachtneu.de/">Acud Macht Neue</a> for a School Of Machines community show.
    </p>
    <p style={{"margin-bottom": "50px"}}>
        3 minutes of animations I made using openframeworks
        were projected onto a broken mirror
        using the vector shapes of the broken mirror as input to the animations.
    </p>
      <img className="doc-image" src="/mfowler/img/looking-glass/looking-glass.png"/>
      <img className="doc-image" src="/mfowler/img/looking-glass/14.jpg"/>
  </div>
)

export default LookingGlass
