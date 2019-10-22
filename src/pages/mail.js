import React from 'react'
import Link from 'gatsby-link'
import Newsletter from '../components/Newsletter'
import Layout from "../layouts/index.js"

const MailPage = () => (
  <Layout>
    <div className="newsletter-wrapper">
        <Newsletter/>
    </div>
  </Layout>
)

export default MailPage
