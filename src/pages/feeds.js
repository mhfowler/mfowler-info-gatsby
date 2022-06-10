import React from 'react'
import Link from 'gatsby-link'
import Layout from "../layouts/index.js"

const ContactPage = () => (
  <Layout>
    <div className="new-about-writeup">
      <p style={{"margin-top": "0px"}}>
          <strong>rss: </strong>
          <br/>
          - mycology updates: https://hyphalfusion.network/posts.rss <br/>
          - writing: https://canalswans.commoninternet.net/rss.xml <br/>
          - sunbeam: https://sunbeam.city/@notplants/rss.xml <br/>
        </p>
    </div>
  </Layout>
)

export default ContactPage
