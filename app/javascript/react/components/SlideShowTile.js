import React, { Component } from 'react';

import Carousel from 'nuka-carousel';

class SlideShowTile extends Component {
  render() {
    let images = this.props.images.map(image => {
      let length = image.image.url.length
      let url = image.image.url.slice(1,length)
      return(
        <img className="image" src={url} key={image.id}/>
      )
    })

    return (
      <div className="gallery-1">
        <h2>{this.props.name}</h2>
        <Carousel
          autoplay={true}
          autoplayInterval={2000}
          heightMode="first"
          frameOverflow="hidden"
        >
        {images}
        </Carousel>
      </div>
    )
  }
}

export default SlideShowTile;
