import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
    faGlobe,
    faCircleQuestion,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Accountitem from '~/components/AccountItem';
import Button from '~/components/Button';
import { Menu as PopperMenu } from '~/components/Popper';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: 'English',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: 'feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

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

                    <PopperMenu items={MENU_ITEMS}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </PopperMenu>
                </div>
            </div>
        </header>
    );
}

export default Header;
