import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import MenuHeader from './Header';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const currentMenu = history[history.length - 1];

    // Handle Choose Menu Item:
    const handleChooseItem = (item) => {
        const isHasSubMenu = !!item.submenu; //Kiểm tra item hiện tại có submenu?, toán tử !! convert sang boolean.

        if (isHasSubMenu) {
            handlePushSubMenu(item);
        } else {
            onChange(item);
        }
    };

    // Handel push Menu:
    const handlePushSubMenu = (item) => {
        setHistory((prev) => [...prev, item.submenu]);
    };

    // Handle pop Menu:
    const handlePopMenu = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    // Render item Menu:
    const renderItem = () => {
        return currentMenu.data.map((item, index) => {
            return (
                <MenuItem
                    className={cx('menu-item', { separate: item.separate })}
                    key={index}
                    data={item}
                    onClick={() => handleChooseItem(item)}
                />
            );
        });
    };

    const renderMenu = (attrs) => (
        <div className={cx('menu')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-wrapper')}>
                {currentMenu.title && <MenuHeader title={currentMenu.title} onBack={handlePopMenu} />}
                <div className={cx('menu-scroll')}>{renderItem()}</div>
            </PopperWrapper>
        </div>
    );

    const handleResetToFirstMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            interactive
            // visible
            placement="bottom-end"
            delay={[0, 600]}
            onHide={handleResetToFirstMenu}
            offset={[10, 8]}
            hideOnClick={hideOnClick}
            render={renderMenu}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array.isRequired,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
