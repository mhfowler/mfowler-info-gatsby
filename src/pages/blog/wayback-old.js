import React from 'react'
import Link from 'gatsby-link'
import Layout from "../../layouts/index.js"

const WaybackOld = () => (
  <Layout>
    <div className="doc-wrapper overlaid">

      <h2 className="blog-post-title">
        wayback
      </h2>

      <p className="blog-post-meta">
        2016-06-20
      </p>

      <p>
        An image, captured by the wayback machine from 2009,
        of a website I made in highschool containing
        now defunct links to songs I recorded in my family house's
        closet (also containing the internet router and cleaning supplies),
        along with some
        geometric broken image links from the album art I photo-shopped together from
        heavily filtered images of things around my house:

        <a href="https://web.archive.org/web/20090323231502/http://www.maximusfowler.com/maximusproductions/Music.html">
          <img className="doc-image" src="http://mhfowler.github.io/notes-from-sfpc/static/remnant.png" style={{"max-width": "100%", "margin-bottom": "10px", "margin-top": "20px"}}/>
        </a>

      </p>

      <p>My freshman and sophomore years of high school I didn’t have many friends &mdash; I spent a lot of time next to
        the router making angsty electronic music. I kept a small MIDI keyboard and microphone on a fold-able table in
        the closet.</p>
      <p>I made hundreds of songs, and used iWeb (apple’s WYISWYG website maker) to make a website to ‘publish’ the
        music to. I spent hours photographing my dog, and random plants and photo-shopping the images together into
        album art. I put all the songs and album art onto <a href="http://maximusfowler.com">http://maximusfowler.com</a> and
        didn’t share the website or music with anyone.</p>
      <p>This last spring I looked up maximusfowler.com on the wayback machine and found three entries:
        <img className="doc-image"
             src="http://mhfowler.github.io/notes-from-sfpc/static/wayback.png"/></p>
      <p>I clicked through to Music.html and found the following remnant of a page from 2009: <a
        href="https://web.archive.org/web/20090323231502/http://www.maximusfowler.com/maximusproductions/Music.html">https://web.archive.org/web/20090323231502/http://www.maximusfowler.com/maximusproductions/Music.html</a>
      </p>
      <p>Scrolling through the blue letters on the dark background, thinking about echoes of a memory, of looking out
        the window of my bedroom at night, and an even more distant memory of barefoot stepping on a firecracker and
        crying, of diving into a lake and passing through an unexpected cold patch of water.</p>
      <p>Perhaps these dark blue letters and empty boxes reverberate my childhood to me more deeply than if all the
        pages of the site remained</p>

    </div>
  </Layout>
)

export default WaybackOld
