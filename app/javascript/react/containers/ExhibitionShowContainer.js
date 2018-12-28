import React, {Component} from 'react';

import ExhibitionTile from '../components/ExhibitionTile'

class ExhibitionShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exhibition: {},
      images:[]
    };
  }

  componentDidMount(){
    fetch(`/api/v1/exhibitions/${this.props.params.id}`)
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
        this.setState({ exhibition: body, images: body.images });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {

    return(
      <div>
        <h1>{this.state.exhibition.name}</h1>
      </div>
    );
  }
};

export default ExhibitionShowContainer;
