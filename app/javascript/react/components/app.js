import React from 'react'

import { Router, browserHistory, Route, IndexRoute } from 'react-router'

import HomePageContainer from '../containers/HomePageContainer'
import ExhibitionShowContainer from '../containers/ExhibitionShowContainer'

export const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={HomePageContainer}/>
      <Route path='/exhibitions/:id' component={ExhibitionShowContainer}/>
    </Router>
  )
}

export default App
