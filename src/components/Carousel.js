import React from 'react'
import Slider from 'react-slick'
import Link from 'gatsby-link'

class Carousel extends React.Component {

  constructor() {
    super();
    this.handleBeforeChange = this.handleBeforeChange.bind(this);
  }

  componentDidMount() {

  }

  handleBeforeChange(oldIndex, newIndex) {
    this.refs.carouselFocus.slickGoTo(newIndex);
  }

  render = () => {
    var focusSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        className: `carousel-focus ${this.props.carouselName}-focus`,
      }
      var thumbnailSettings = {
        slidesToShow: this.props.images.length,
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: true,
        arrows: false,
        adaptiveHeight: true,
        beforeChange: this.handleBeforeChange,
        variableWidth: true,
        asNavFor: this.refs.carouselFocus,
        className: `carousel-thumbnails ${this.props.carouselName}-thumbnails`
      }
    return (
      <div className="carousel-inner-wrapper">
        <Slider {...focusSettings} ref="carouselFocus">
          {this.props.images.map(function (imgLink, i) {
            return (
              <div className="img-container">
                <img className="carousel-thumbnail" src={imgLink}/>
              </div>
            )
          })}
        </Slider>
        <Slider {...thumbnailSettings} ref="carouselThumbnails">
          {this.props.images.map(function (imgLink, i) {
            return (
              <div className="img-container">
                <img className="carousel-thumbnail" src={imgLink}/>
              </div>
            )
          })}
        </Slider>
      </div>
    )
  }
}

export default Carousel
