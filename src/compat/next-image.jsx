import React from 'react';

const Image = ({ src, alt, width, height, fill, className, priority, sizes, ...props }) => {
    const resolvedSrc = typeof src === 'object' ? src?.src || src?.default?.src : src;
    // When fill is true, image must fill its positioned parent (absolute inset-0)
    const fillClasses = fill ? 'absolute inset-0 w-full h-full object-cover' : '';
    const combinedClassName = [fillClasses, className].filter(Boolean).join(' ');
    const imgProps = fill ? {} : { width, height };

    return (
        <img
            src={resolvedSrc}
            alt={alt}
            className={combinedClassName}
            loading={priority ? 'eager' : 'lazy'}
            {...imgProps}
            {...props}
        />
    );
};

export default Image;
