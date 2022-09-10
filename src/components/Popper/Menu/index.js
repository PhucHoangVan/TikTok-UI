import Tippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import MenuHeader from './Header';

const cx = classNames.bind(styles);

function Menu({ children, items = [], onChange }) {
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
                <MenuItem className={cx('menu-item')} key={index} data={item} onClick={() => handleChooseItem(item)} />
            );
        });
    };

    return (
        <Tippy
            interactive
            visible
            placement="bottom-end"
            delay={[0, 600]}
            render={(attrs) => (
                <div className={cx('menu')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-wrapper')}>
                        {currentMenu.title && <MenuHeader title={currentMenu.title} onBack={handlePopMenu} />}
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
