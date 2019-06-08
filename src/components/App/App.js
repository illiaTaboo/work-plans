import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import CoreLayout from 'layouts/CoreLayout';
import AppProvider from 'components/AppProvider';

class App extends Component {
  render () {
    return (
      <AppProvider>
        <BrowserRouter>
          <CoreLayout />
        </BrowserRouter>
      </AppProvider>
    );
  }
}

export default App;
