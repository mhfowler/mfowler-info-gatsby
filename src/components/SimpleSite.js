import React from 'react'
import SLink from './SLink.js'


const SimpleSite = () => {
  return (
   <div className="simple-site">
    <div className="about-line" style={{"marginTop": "20px"}}>
        Max Fowler is an artist, programmer and organizer living in Berlin. <br/>
        <a href="mailto:max@mfowler.info">Send them an email</a> or sign up for their <SLink to="/mail">newsletter</SLink>.
    </div>

    <div className="simple-list">

        <div className="list-of-projects">
            <div className="simple-wrapper">
                <div className="simple-title">
                    <SLink to="/work/whats-on-your-mind">What's On Your Mind?</SLink>
                </div>
                <div className="simple-description">
                    a collection of facebook statuses from the week after November 9th, 2016
                </div>
            </div>
            <div className="simple-wrapper">
                <div className="simple-title">
                    <SLink to="/work/open-source-feeds">Open Source Feeds</SLink>
                </div>
                <div className="simple-description">
                    a workshop to make your own feed algorithm
                </div>
            </div>
             <div className="simple-wrapper">
                <div className="simple-title">
                    <SLink to="/work/infinite-wishing">Infinite Wishing</SLink>
                </div>
                <div className="simple-description">
                    a hopeful receipt printer
                </div>
            </div>
            <div className="simple-wrapper">
                <div className="simple-title">
                    <SLink to="/work/looking-glass">Looking Glass</SLink>
                </div>
                <div className="simple-description">
                    a projection onto a broken mirror
                </div>
            </div>
            <div className="simple-wrapper">
                <div className="simple-title">
                    <SLink to="/work/oasis">Oasis</SLink>
                </div>
                <div className="simple-description">
                    a virtual reality commune only acessible by SSH
                </div>
            </div>
            <div className="simple-wrapper">
                <div className="simple-title">
                    <SLink to="/work/2pots">2 pots</SLink>
                </div>
                <div className="simple-description">
                    a series of generative lines drawings exploring controlled noise
                </div>
            </div>
            <div className="simple-wrapper">
                <div className="simple-title">
                    <SLink to="http://abridgedmaps.com/">Abridged Maps</SLink>
                </div>
                <div className="simple-description">
                    a website that strips Google Maps of all natural imagery to reveal concrete poems about the structure of contemporary space
                </div>
            </div>
            <div className="simple-wrapper">
                <div className="simple-title">
                    <SLink to="/work/truespeak/">Truespeak</SLink>
                </div>
                <div className="simple-description">
                    an app that allows you to upload your text message history to a publicly viewable page on the internet
                </div>
            </div>
            <div className="simple-wrapper">
                <div className="simple-title">
                    <SLink to="/work/howdoispeak_archive/">HowDoISpeak</SLink>
                </div>
                <div className="simple-description">
                    a website which shows you insights about the way you text by analyzing your word usage in your text messages
                </div>
            </div>
            <div className="simple-wrapper">
                <div className="simple-title">
                    <SLink to="/work/the_capitalist_tshirt/">The Capitalist T-Shirt</SLink>
                </div>
                <div className="simple-description">
                    an e-commerce store which sells t-shirts, framed prints and booty shorts
                </div>
            </div>
            <div className="simple-wrapper">
                <div className="simple-title">
                    <SLink to="http://mhfowler.github.io">CSS Sketchbook</SLink>
                </div>
                <div className="simple-description">
                    experiments in css
                </div>
            </div>

        </div>
    </div>
</div>
  )
}

export default SimpleSite
