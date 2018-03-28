import React from 'react'
import Link from 'gatsby-link'

const TwoPots = () => (
 <div className="doc-wrapper overlaid">

    <h2>2 pots</h2>

    <p className="doc-tags">
        August 2016
    </p>

    <p className="doc-tags">
        openframeworks, arduino, potentiometers
    </p>
     <p>
        Using a handmade cardboard interface housing an arduino and 2 potentiometers (2 pots), visitors control parameters
        of a series of generative line drawings made using open frameworks.
    </p>
    <p>
        <span style="font-style:italic;">2 pots</span> was an installation created for the <a href="http://sfpc.io">SFPC</a> final show at the end of
        a 10 week session studying code, design, hardware and theory.
    </p>


    <img className="doc-image first-image" src="/mfowler/img/2pots/2pots.JPG"/>

    <img className="doc-image" src="/mfowler/img/2pots/hands.JPG"/>

    <img className="doc-image" src="/mfowler/img/2pots/red.png"/>

    <p style="margin-top: 40px;">
        Below are a series of screenshots taken directly from openframeworks:
    </p>

    <img className="doc-image" src="/mfowler/img/2pots/screenshots/noise_dark.png"/>
    <img className="doc-image" src="/mfowler/img/2pots/screenshots/noise_medium.png"/>
    <img className="doc-image" src="/mfowler/img/2pots/screenshots/red_full.png"/>
    <img className="doc-image" src="/mfowler/img/2pots/screenshots/spiral.png"/>
    <img className="doc-image" src="/mfowler/img/2pots/screenshots/glitch.png"/>
    <img className="doc-image" src="/mfowler/img/2pots/screenshots/object.png"/>
    <p>
        You can also see one sketch which was ported over to the browser using p5.js
        <a href="http://mhfowler.github.io/westbeth-processing/sketches/veragrowth/vera.html">here</a>.
    </p>
</div>
)

export default TwoPots
