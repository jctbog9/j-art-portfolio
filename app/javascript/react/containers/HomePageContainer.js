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
        <SlideShowTile />
      </div>
    );
  }
};

export default HomePageContainer;
