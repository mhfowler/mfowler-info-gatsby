import React from 'react'
import Link from 'gatsby-link'
import Layout from "../layouts/index.js"

const ContactPage = () => (
  <Layout>
    <div className="new-about-writeup">
      <p style={{"margin-top": "0px"}}>
        Newer code can be found on a gitea instance at <a href="https://git.coopcloud.tech/notplants">https://git.coopcloud.tech/</a>
      </p>
      <p>
        Older code and contributions to projects hosted on github can be found at <a href="https://github.com/mhfowler">github.com/mhfowler</a>
      </p>
    </div>
  </Layout>
)

export default ContactPage
