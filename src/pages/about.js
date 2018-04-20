import React from 'react'
import Link from 'gatsby-link'

const AboutPage = () => {
  return (
    <div>
      <div className="about-wrapper">

        <div className="new-about-writeup overlaid">
          <p style={{"margin-top": "0px"}}>
            <strong>currently: </strong>
            <br/>
            - researching attention, notifications and systems for blocking social media on your phone<br/>
            - freelancing (please <a href="mailto:maxhfowler+website@gmail.com">email me</a> if you would like to work together)
          </p>
        </div>

        <p >
          <Link to="/mail">newsletter</Link> // <a href="http://twitter.com/notplants">twitter</a> // <a href="http://instagram.com/maxpicks">instagram</a> // <a href="http://github.com/mhfowler">github</a> // <a href="https://www.are.na/max-fowler">are.na</a> // <a href="mailto:maxhfowler@gmail.com">maxhfowler@gmail.com</a>
        </p>

        <br/>
        <strong>in the past: </strong><br/>


        <br/><br/>
        <div> GROUP SHOWS & EXHIBITIONS </div>
        <hr/>

          <br/>
          <div className="year-wrapper">
            <div className="left-col-cv">2017</div>
            <div className="right-col-cv">
              <i>What's On Your Mind?</i><br/>
              <a href="https://babycastles.com/">Babycastles</a><br/>
              w/ Rachel Haberstroh<br/>
              New York City, New York

              <br/><br/>
              <i>Open Source Feeds</i><br/>
              <a href="https://pioneerworks.org/classNamees/open-source-feeds/">Pioneer Works</a><br/>
              w/ Sam Hart<br/>
              Brooklyn, New York

              <br/><br/>
              <i>Infinite Wishing Well</i><br/>
              <a href="http://www.smalleditionsnyc.com/exhibitions/paperless-opening-friday-july-29th/">Small Editions</a><br/>
              w/ Rachel Haberstroh<br/>
              Brooklyn, New York

              <br/><br/>
              <i>Cyborg Futures</i><br/>
              <a href="http://www.cyborgfutures.com/">Cyborg Futures</a><br/>
              New York, New York

              <br/><br/>
              <i>Looking Glass</i><br/>
              <a href="http://acudmachtneu.de/">Acud Macht Neue</a><br/>
              Berlin, Germany
            </div>
          </div>
          <div className="year-wrapper">
            <br/>
            <div className="left-col-cv">2016</div>
            <div className="right-col-cv">
              <i>Oasis</i><br/>
              <a href="http://radicalnetworks.org/archives/2016/">Radical Networks</a><br/>
              Brooklny, New York

              <br/><br/>
              <i>Society For Power Control</i><br/>
              <a href="http://sfpc.io/classNamees/summer2016show/">School For Poetic Computation</a><br/>
              Brooklyn, New York
            </div>
          </div>

          <br/><br/>
          <div> TEACHING & WORKSHOPS </div>
          <hr/>
            <br/>
            <div className="year-wrapper">
              <div className="left-col-cv">2017</div>
              <div className="right-col-cv">
                <i>TA at the School For Poetic Computation</i><br/>
                <a href="http://sfpc.io/">School For Poetic Computation</a><br/>
                TA for Taeyoon Choi and Pamela Liu<br/>
                New York City, New York

                <br/><br/>
                <i>Research Roundtable: Creative Collaboration</i><br/>
                <a href="https://pioneerworks.org/classNamees/research-roundtable-1-creative-collaboration/">Pioneer Works</a><br/>
                w/ Stephanie Dinkins & Ellen Pearlman<br/>
                Brooklyn, New York
              </div>
            </div>
            <div className="year-wrapper">
              <br/>
              <div className="left-col-cv">2016</div>
              <div className="right-col-cv">
                <i>Workshop: Experimental Pedagogy And Organizations</i><br/>
                <a href="http://betterworldxdesign.com/">Better World By Design</a><br/>
                Providence, Rhode Island

                <br/><br/>
                <i>On Virtual Reality And The Rise Of Interactive Media</i><br/>
                <a href="http://betterworldxdesign.com/">Better World By Design</a><br/>
                w/ Chris Novello<br/>
                Providence, Rhode Island
              </div>
            </div>

            <br/><br/>
            <div> EDUCATION </div>
            <hr/>
              <br/>
              <div className="year-wrapper">
                <div className="left-col-cv">2016</div>
                <div className="right-col-cv">
                  Ten Week Session Studying Code, Design, Hardware and Theory<br/>
                  <a href="http://sfpc.io/">School For Poetic Computation</a><br/>
                  New York City, New York
                </div>
              </div>
              <div className="year-wrapper">
                <br/>
                <div className="left-col-cv">2014</div>
                <div className="right-col-cv">
                  BA, Computer Science<br/>
                  <a href="https://www.brown.edu/">Brown University</a><br/>
                  Providence, Rhode Island
                </div>
              </div>

              <br/><br/>
              <div> PRESS </div>
              <hr/>

                <br/>
                <div className="year-wrapper">
                  <div className="left-col-cv">2017</div>
                  <div className="right-col-cv">
                    <a href="https://impact.vice.com/en_us/article/pazykn/occupy-wall-street-artists-are-fighting-corporate-control-over-museums">Impact: Occupy Wall Street Artists Are Fighting Corporate Control Over Museums</a> <br/>on Fact Craft
                    <br/><br/>
                    <a href="https://garage.vice.com/en_us/article/9kqpwy/coco-fusco-noah-fischer-pioneer-works">Garage: "Art is the Ultimate Con": Should Artists Occupy Museums?</a> <br/>on Fact Craft
                    <br/><br/>
                    <a href="http://observer.com/2017/04/callparty-facebook-messenger-got-for-calling-your-congressman/">The Observer: Complaining to Your Congressman Just Got Way Easier Thanks To This New Facebook Bot</a> <br/>on CallParty
                    <br/><br/>
                  </div>
                </div>
      </div>
    </div>
  )
}

export default AboutPage
