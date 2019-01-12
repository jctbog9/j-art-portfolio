import React, { Component } from 'react';

import { Link } from 'react-router';

class ExhibitionTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
    this.onMouseHover = this.onMouseHover.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }

  onMouseHover(){
    this.setState({ hovered: true })
  }

  onMouseLeave(){
    this.setState({ hovered: false })
  }

  render() {
    let thumbnail;
    let title;

    if (this.props.images.length) {
      thumbnail = <img src={this.props.images[0].image}/>
    }

    if (this.state.hovered === false) {
      title = <h3>{this.props.name}</h3>
    }

    return (
      <Link to={`/exhibitions/${this.props.id}`}>
        <div className="thumbnail" onMouseEnter={this.onMouseHover} onMouseLeave={this.onMouseLeave}>
          {thumbnail}
          {title}
        </div>
      </Link>
    )
  }
}

export default ExhibitionTile;
