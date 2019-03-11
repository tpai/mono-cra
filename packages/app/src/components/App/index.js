import React, { PureComponent } from 'react';
import cx from 'classnames';
import { Button } from 'ui-base';

import styles from './styles.module.scss';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPaused: false,
    };
  }
  handleToggleRotation = () => {
    this.setState(({ isPaused }) =>
      ({ isPaused: !isPaused })
    );
  }
  render() {
    const { isPaused } = this.state;
    return (
      <div className={styles.container}>
        <div
          className={cx(styles.logo, {
            [styles.running]: !isPaused,
            [styles.pause]: isPaused,
          })}
        />
        <Button
          className={cx(styles.button, {
            [styles.pause]: !isPaused,
          })}
          handleClick={this.handleToggleRotation}
        >
          <i className={cx('fas', isPaused ? 'fa-play' : 'fa-pause')}></i>
          {isPaused ? 'Start' : 'Stop'}
        </Button>
      </div>
    );
  }
}

export default App;
