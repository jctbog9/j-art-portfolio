import React, {Component} from 'react';

import ExhibitionTile from '../components/ExhibitionTile'

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
          <ExhibitionTile
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

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2&appId=213196965552&autoLogAppEvents=1';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    return(
      <div>
        <div className="galleries-wrapper">
          <h2>My Exhibitions</h2>
          {exhibitions}
        </div>
        <div className="right">
          <p>This is where Jason's profile snapshot will go</p>
          <div className="fb-box">
            <a className="page-link" href="https://www.facebook.com/JasonAntayaArtwork/" target="_blank">
              <div className="fb-header">
                <img src="https://scontent.fbed1-2.fna.fbcdn.net/v/t1.0-9/44358919_1858191574280218_3605955233487781888_n.jpg?_nc_cat=102&_nc_ht=scontent.fbed1-2.fna&oh=83ef29bd1c6e6e25dcfbdcb05d3b8f75&oe=5CD7A3A4"/>
                <p>Jason Antaya Art</p>
              </div>
            </a>
            <div className="fb-like" data-href="https://www.facebook.com/JasonAntayaArtwork/" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true">
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default HomePageContainer;
