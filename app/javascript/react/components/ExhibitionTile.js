import React, { Component } from 'react';

import { Link } from 'react-router';

class ExhibitionTile extends Component {
  render() {
    let thumbnail;
    let urlLength;
    let splicedThumbnail;

    let caption;

    if (this.props.images.length) {
      thumbnail = this.props.images[0]
      urlLength = thumbnail.length
      splicedThumbnail = <Link to={`/exhibitions/${this.props.id}`}><img src={thumbnail.image.url.slice(1,urlLength)} /></Link>
      caption = <h3>{thumbnail.name}</h3>
    }
    return (
      <div className="thumbnail">
        {splicedThumbnail}
        {caption}
      </div>
    )
  }
}

export default ExhibitionTile;
