import React, { Component } from 'react';
import Box from './components/Box';
import GlobalStyle from './components/GlobalStyle';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Box />
      </React.Fragment>
    );
  }
}
export default App;
