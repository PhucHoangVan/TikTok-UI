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
    faArrowUpFromBracket,
    faUserAlt,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { useEffect, useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Accountitem from '~/components/AccountItem';
import Button from '~/components/Button';
import { Menu as PopperMenu } from '~/components/Popper';
import { faTelegram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

const currentUser = true;

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: 'English',
        submenu: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                    submenu: {
                        title: 'English',
                        data: [
                            {
                                code: 'en-us',
                                title: 'US English',
                            },
                            {
                                code: 'en-uk',
                                title: 'UK English ',
                            },
                        ],
                    },
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
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

const MenuFullOption = [
    {
        icon: <FontAwesomeIcon icon={faUserAlt} />,
        title: 'View profile',
        to: '@phuchv02',
    },
    {
        icon: <FontAwesomeIcon icon={faTiktok} />,
        title: 'Get coins',
        to: 'coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: 'setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'logout',
        to: 'logout',
        separate: true,
    },
];

// Handle MenuChange:
const handleMenuChange = (menuItem) => {
    // handle logic here:
    // Example:
    switch (menuItem.code) {
        case 'en-us':
            console.log('Translate English US');
            break;
        case 'en-uk':
            console.log('Translate English UK');
            break;
        case 'vi':
            console.log('Translate Tieng Viet');
            break;
        default:
            break;
    }
};

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
                    <HeadlessTippy
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
                    </HeadlessTippy>
                </div>

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 100]} content="Upload Video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faTelegram} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Button className={cx('custom-btn')} primary>
                                Log in
                            </Button>
                        </>
                    )}

                    <PopperMenu items={currentUser ? MenuFullOption : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                src="https://vaithuhayho.com/wp-content/uploads/2021/04/hinh-anh-avatar-de-thuong-3-2.jpg"
                                alt="user name"
                                className={cx('user-avatar')}
                            />
                        ) : (
                            <>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </>
                        )}
                    </PopperMenu>
                </div>
            </div>
        </header>
    );
}

export default Header;
