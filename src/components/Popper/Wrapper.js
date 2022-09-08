import styles from './Popper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Wrapper({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Wrapper;
