import React from 'react';
import ClickCounter from './ClickCounter';
import withCounter from './withCounter';

class App extends React.Component {


  render() {
    return (
      <div>
        <ClickCounter />
        <withCounter />
      </div>
    )
  }
}

export default App;
