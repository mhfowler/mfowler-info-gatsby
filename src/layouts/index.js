import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header.js'
import './index.scss'

var classNames = require('classnames')


const MoodButton = ({mood, currentMood, handleMoodClick}) => {
  var classes = classNames({
    'mood-button': true,
    'clicked': mood === currentMood
  });
  return (
    <a className={classes} onClick={handleMoodClick.bind(this, mood)}>{mood}</a>
  )
}

class TemplateWrapper extends React.Component {

  constructor() {
    super();
    this.handleMoodClick = this.handleMoodClick.bind(this);
    this.state = {
      mood: 'standard'
    }
    this.handleMoodClick = this.handleMoodClick.bind(this)
  }

  handleMoodClick(mood) {
    this.setState({mood: mood})
  }

  render() {
    var wrapperClasses = `base-body ${this.state.mood}`
    return (
      <div className={wrapperClasses}>
        <Helmet
          title="mfowler.info"
          meta={[
            {name: 'description', content: 'Max Fowler | Freelancer'},
            {name: 'keywords', content: 'freelance, art'},
          ]}
          bodyAttributes={{
            class: this.state.mood
          }}
        />
        <link rel="stylesheet" type="text/css" charset="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
        <link rel="stylesheet" type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet"/>
        <link rel="icon" href="/mfowler/img/favico.ico" type="image/x-icon"/>
        <div className="page-wrapper">
          <Header/>
          <div className="main-wrapper">
            {this.props.children()}
          </div>
        </div>
        <div className="right-filler">
          welcome to the website
        </div>
        <div className="right-filler top-left">
          <div className="click-your-mood"> click your mood:</div>
          <MoodButton mood="standard" currentMood={this.state.mood} handleMoodClick={this.handleMoodClick} />
          <MoodButton mood="asmr" currentMood={this.state.mood} handleMoodClick={this.handleMoodClick} />
          <MoodButton mood="sponsored" currentMood={this.state.mood} handleMoodClick={this.handleMoodClick} />
          <MoodButton mood="test" currentMood={this.state.mood} handleMoodClick={this.handleMoodClick} />
        </div>
        <div className="right-filler bottom-left">
          welcome to the website
        </div>
        <div className="right-filler bottom-right">
          welcome to the website
        </div>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
