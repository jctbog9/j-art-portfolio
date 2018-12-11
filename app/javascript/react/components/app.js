import React from 'react'

import { Router, browserHistory, Route, IndexRoute } from 'react-router'

import HomePageContainer from '../containers/HomePageContainer'

export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={HomePageContainer}/>
    </Router>
  )
}

export default App
