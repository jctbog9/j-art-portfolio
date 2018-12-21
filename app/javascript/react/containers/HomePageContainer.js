import React, {Component} from 'react';

import SlideShowTile from '../components/SlideShowTile'

class HomePageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exhibitions: []
    };
  }

  componentDidMount(){
    fetch(`/api/v1/exhibitions`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ exhibitions: body });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let exhibitions;
    if (this.state.exhibitions) {
      exhibitions = this.state.exhibitions.map(exhibition => {
        return(
          <SlideShowTile
            key={exhibition.id}
            id={exhibition.id}
            name={exhibition.name}
            date={exhibition.date}
            location={exhibition.location}
            images={exhibition.images}
          />
        )
      })
    }

    return(
      <div>
        {exhibitions}
      </div>
    );
  }
};

export default HomePageContainer;
