import React, { PureComponent, Fragment } from 'react'
import { HashRouter } from 'react-router-dom'
import { connect } from 'react-redux'
// import history from './helpers/history'

import Routes from './Routes'
import Loader from './components/Loader/'

class App extends PureComponent {
  render() {
    return (
      <Fragment>
        {this.props.requestReducer.requesting && <Loader />}
        <HashRouter>
          <Routes />
        </HashRouter>
      </Fragment>
    )
  }
}

const mapStateToProps = ({ requestReducer }) => ({ requestReducer })

export default connect(mapStateToProps)(App)
