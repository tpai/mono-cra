import React, { PureComponent } from 'react';
import * as UI from 'ui-base';

import styles from './App.module.scss';

class App extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.logo} />
        <UI.Button
          className={styles.button}
          handleClick={() => alert('Got you!')}
        >
          <i className="far fa-hand-point-up"></i>
          Click Me!
        </UI.Button>
      </div>
    );
  }
}

export default App;
