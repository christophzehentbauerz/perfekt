import React, { useState } from 'react';
import { ImageData } from '../types';

interface SmartImageProps {
  data: ImageData;
  className?: string;
  style?: React.CSSProperties;
}

const SmartImage: React.FC<SmartImageProps> = ({ data, className, style }) => {
  const [src, setSrc] = useState(data.src);

  const handleError = () => {
    setSrc(data.fallback);
  };

  return (
    <img
      src={src}
      alt={data.alt}
      className={className}
      style={style}
      onError={handleError}
      loading="lazy"
    />
  );
};

export default SmartImage;