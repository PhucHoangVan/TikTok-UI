import PropTypes from 'prop-types';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, className, onClick }) {
    return (
        <Button className={cx(className)} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default MenuItem;
