import React, { Component } from 'react';

import Carousel from 'nuka-carousel';

class SlideShowTile extends Component {
  render() {
    return (
      <div className="gallery-1">
        <h2>Gallery 1</h2>
        <Carousel
          autoplay={true}
          autoplayInterval={2000}
          heightMode="first"
          frameOverflow="hidden"
        >
          <img className="image" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/05/22224952/beagle-puppy-in-large-cushion-chair.jpg"/>
          <img className="image" src="https://86cb8127dc14737f5057-7c0671222953158607ea93d5febd68b4.ssl.cf1.rackcdn.com/660/assets/responsive/493000/493970/web_dog-puppy.jpg"/>
          <img className="image" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12193133/German-Shepherd-Puppy-Fetch.jpg"/>
          <img className="image" src="https://cdn1-www.dogtime.com/assets/uploads/2010/12/puppies.jpg"/>
          <img className="image" src="https://s.abcnews.com/images/Lifestyle/puppy-ht-3-er-170907_4x3_992.jpg"/>
        </Carousel>
        <h2>Gallery 2</h2>
        <Carousel
          autoplay={true}
          autoplayInterval={2000}
          heightMode="first"
          frameOverflow="hidden"
        >
          <img className="image" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/05/22224952/beagle-puppy-in-large-cushion-chair.jpg"/>
          <img className="image" src="https://86cb8127dc14737f5057-7c0671222953158607ea93d5febd68b4.ssl.cf1.rackcdn.com/660/assets/responsive/493000/493970/web_dog-puppy.jpg"/>
          <img className="image" src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12193133/German-Shepherd-Puppy-Fetch.jpg"/>
          <img className="image" src="https://cdn1-www.dogtime.com/assets/uploads/2010/12/puppies.jpg"/>
          <img className="image" src="https://s.abcnews.com/images/Lifestyle/puppy-ht-3-er-170907_4x3_992.jpg"/>
        </Carousel>
      </div>
    )
  }
}

export default SlideShowTile;
