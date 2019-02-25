import React, { PureComponent } from 'react';
import * as UI from 'ui-base';

class App extends PureComponent {
  render() {
    return (
      <div>
        <UI.Button handleClick={() => alert('imported button clicked')}>
          Click Me in App
        </UI.Button>
      </div>
    );
  }
}

export default App;
