import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import styles from './Image.module.scss';
import classNames from 'classnames';

import images from '~/assets/images';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={fallback || src}
            {...props}
            ref={ref}
            alt={alt}
            onError={handleError}
        ></img>
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
