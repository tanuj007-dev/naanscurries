import React from 'react';

const Image = ({ src, alt, width, height, className, priority, ...props }) => {
    // Simple <img> tag replacement for @/src/compat/next-image
    return (
        <img
            src={typeof src === 'object' ? src.src || src.default?.src : src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            loading={priority ? 'eager' : 'lazy'}
            {...props}
        />
    );
};

export default Image;
