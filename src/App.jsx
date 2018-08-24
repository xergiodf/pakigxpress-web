import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';
import NavContainer from './containers/NavContainer';
import FooterContainer from './containers/FooterContainer';

const App = () => (
  <BrowserRouter>
    <Fragment>
      <NavContainer />
      <Routes />
      <FooterContainer />
    </Fragment>
  </BrowserRouter>
);

export default App;
