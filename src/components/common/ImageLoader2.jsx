import { LoadingOutlined } from '@ant-design/icons';
import PropType from 'prop-types';
import React, { useState } from 'react';

const ImageLoader2 = ({ src, alt, className }) => {
  const loadedImages = {};
  const [loaded, setLoaded] = useState(loadedImages[src]);

  const onLoad = () => {
    loadedImages[src] = true;
    setLoaded(true);
  };

  return (
    <>
      {!loaded && (
        <LoadingOutlined style={{
          position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, margin: 'auto'
        }}
        />
      )}
      <img
        alt={alt || ''}
        className={`${className || ''} ${loaded ? 'is-img-loaded' : 'is-img-loading2'}`}
        onLoad={onLoad}
        src={src}
      />
    </>
  );
};

ImageLoader2.defaultProps = {
  className: 'image-loader'
};

ImageLoader2.propTypes = {
  src: PropType.string.isRequired,
  alt: PropType.string.isRequired,
  className: PropType.string
};

export default ImageLoader2;
