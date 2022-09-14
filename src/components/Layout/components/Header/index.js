import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faGlobe,
    faCircleQuestion,
    faKeyboard,
    faUserAlt,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import { Menu as PopperMenu } from '~/components/Popper';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '~/components/Layout/components/Search';

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
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="/">
                    <img src={images.logo} alt="Tiktok"></img>
                </Link>
                <div>
                    <Search />
                </div>
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 100]} content="Upload Video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn', 'inbox-btn')}>
                                    <InboxIcon />
                                    <span className={cx('inbox-quantity')}>7</span>
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
                            <Image
                                src="https://vaithuhayho.com/wp-content/uploads/2021/04/hinh-anh-avatar-de-thuong-3-2.jpg"
                                alt="user name"
                                className={cx('user-avatar')}
                                fallback="https://www.nicepng.com/png/detail/31-315310_react-hexagon-react-js-transparent-background.png"
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
