import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header.js'
import './index.scss'

const TemplateWrapper = ({ children }) => (
  <div className="base-body professional">
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet" />
    <div className="page-wrapper">
      <Header/>
      <div className="main-wrapper">
        {children()}
      </div>
    </div>
    <div className="right-filler">
        welcome to the website
    </div>
    <div className="right-filler top-left">
        welcome to the website
    </div>
    <div className="right-filler bottom-left">
        welcome to the website
    </div>
    <div className="right-filler bottom-right">
        welcome to the website
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
