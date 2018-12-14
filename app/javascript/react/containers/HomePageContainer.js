import React, {Component} from 'react';

import SlideShowTile from '../components/SlideShowTile'

class HomePageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return(
      <div>
        <SlideShowTile
          galleryNumber='Gallery 1'
        />
        <SlideShowTile
          galleryNumber='Gallery 2'
        />
        <SlideShowTile
          galleryNumber='Gallery 3'
        />
      </div>
    );
  }
};

export default HomePageContainer;
