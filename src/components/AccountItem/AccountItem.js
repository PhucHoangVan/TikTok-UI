import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function Accountitem({ data }) {
    return (
        <Link to={`@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.nickname}</span>
                    {data.tick && <FontAwesomeIcon className={cx('checkicon')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{data.full_name}</span>
            </div>
        </Link>
    );
}

Accountitem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Accountitem;
