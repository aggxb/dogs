import React from 'react';
import styles from './Image.module.css';

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  const handleLoad = ({ target }) => {
    setSkeleton(false)
    target.style.opacity = 1;
  };

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img
        src=""
        alt={alt}
        className={styles.img}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  );
};

export default Image;
