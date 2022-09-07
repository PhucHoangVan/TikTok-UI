import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import images from '~/assets/images';

const cx = classNames.bind(styles);
console.log(images.logo);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok"></img>
                <div className={cx('search')}>
                    <input placeholder="Search account or videos" spellCheck={false} />
                    <button>
                        <FontAwesomeIcon className={cx('clear')} icon={faCircleXmark} />
                    </button>
                    {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('action')}></div>
            </div>
        </header>
    );
}

export default Header;
