import React, { Component } from 'react';
import Box from './components/Box';
import GlobalStyle from './components/GlobalStyle';
import Tabs from './components/Tabs';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        {/* <Box /> */}
        <Tabs>
          <div>this is tab1</div>
          <div>this is tab2</div>
        </Tabs>
      </React.Fragment>
    );
  }
}
export default App;
