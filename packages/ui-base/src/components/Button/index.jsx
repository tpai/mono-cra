import React from 'react';

import styles from './styles.scss';

function Button({
  children,
  handleClick,
}) {
  return (
    <button
      className={styles.button}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
