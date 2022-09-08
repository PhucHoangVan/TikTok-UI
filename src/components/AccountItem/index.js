import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function Accountitem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://vaithuhayho.com/wp-content/uploads/2021/04/hinh-anh-avatar-de-thuong-3-2.jpg"
                alt="nameee"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>aespa_official</span>
                    <FontAwesomeIcon className={cx('checkicon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>aespa official</span>
            </div>
        </div>
    );
}

export default Accountitem;
