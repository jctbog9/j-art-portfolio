import React, { Component } from 'react';

import { Link } from 'react-router';

class ExhibitionTile extends Component {
  render() {
    let thumbnail;

    if (this.props.images.length) {
      thumbnail = <img src={this.props.images[0].image}/>
    }
    return (
      <Link to={`/exhibitions/${this.props.id}`}>
        <div className="thumbnail">
          {thumbnail}
          <h3>{this.props.name}</h3>
        </div>
      </Link>
    )
  }
}

export default ExhibitionTile;
