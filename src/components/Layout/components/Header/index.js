import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Accountitem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    const [searchHistory, setSearchHistory] = useState([]);

    useEffect(() => {
        setSearchHistory([2, 9, 9]);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok"></img>
                <div>
                    <Tippy
                        interactive
                        visible={searchHistory.length > 0}
                        render={(attrs) => (
                            <div className={cx('search-history')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Accounts</h4>
                                    <Accountitem />
                                    <Accountitem />
                                    <Accountitem />
                                    <Accountitem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
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
                    </Tippy>
                </div>
                <div className={cx('action')}>
                    <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>
                    <Button className={cx('custom-btn')} primary>
                        Log in
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
