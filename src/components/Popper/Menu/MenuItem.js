import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, className }) {
    return (
        <Button className={className} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
