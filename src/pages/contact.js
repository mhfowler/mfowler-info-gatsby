import React from 'react'
import Link from 'gatsby-link'
import Layout from "../layouts/index.js"

const ContactPage = () => (
  <Layout>
    <div className="new-about-writeup">
      <p style={{"margin-top": "0px"}}>
        <a href="mailto:max@mfowler.info">max@mfowler.info</a>
      </p>
    </div>
  </Layout>
)

export default ContactPage
