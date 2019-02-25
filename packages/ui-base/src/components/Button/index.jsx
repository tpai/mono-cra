import React from 'react';
import cx from 'classnames';

import styles from './styles.scss';

function Button({
  children,
  className,
  handleClick,
}) {
  return (
    <button
      className={cx(styles.button, className)}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
