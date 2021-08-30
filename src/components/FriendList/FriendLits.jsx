import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import s from './FriendList.module.css';

export const FriendList = ({ friends }) => (
  <ul className={s.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        key={id}
        isOnline={isOnline}
        avatar={avatar}
        name={name}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape),
};
