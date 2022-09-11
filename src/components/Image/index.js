import { forwardRef, useState } from 'react';
import styles from './Image.module.scss';
import classNames from 'classnames';

import images from '~/assets/images';

function Image({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) {
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
}

export default forwardRef(Image);
