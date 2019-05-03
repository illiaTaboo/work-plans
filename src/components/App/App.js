import React, { Component, Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import CoreLayout from 'layouts/CoreLayout';

class App extends Component {
  render () {
    return (
      <Fragment>
        <BrowserRouter>
          <CoreLayout />
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
