import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const FriendListItem = ({avatar, name, isOnline}) => {
    return <div className={css.friendItem}>
        <img src={avatar} alt={name} width="48" />
        <p>{name}</p>
        <p className={clsx(isOnline ? css.friendActive : css.friendOffline)}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>;
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
};

export default FriendListItem;