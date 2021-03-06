import React from 'react'
import Link from 'gatsby-link'
import SLink from './SLink.js'
import Filler from './Filler.js'
var classNames = require('classnames')

const Header = ({reversed}) => {
  var classes = classNames({
    'navbar': true,
    'overlaid': true,
    'reversed': reversed
  });
  return (
    <div className={classes}>
      <div className="myname">
        <Link  to="/">MAX FOWLER </Link>
      </div>
      <div className="navlinks">
        <div className="navlink">
          <Link to="/about">about</Link>
        </div>
        <div className="navlink">
          <Link to="/">work</Link>
        </div>
        <div className="navlink">
          <SLink  to="http://canalswans.commoninternet.net">writing </SLink>
        </div>
        <div className="navlink">
          <a href="https://sunbeam.city/@notplants">sunbeam</a>
        </div>
        <div className="navlink">
          <a  href="http://github.com/mhfowler">github </a>
        </div>
        <div className="navlink last-navlink">
          <Link  to="/contact">contact </Link>
        </div>
      </div>
      <div className="filler-wrapper">
        <Filler/>
        <Filler/>
      </div>
    </div>
  )
}

export default Header
