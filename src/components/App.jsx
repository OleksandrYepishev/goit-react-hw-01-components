import friends from '../friends.json';
import user from '../user.json';
import statisticalData from '../statistical-data.json';

import { Statistics } from './Statistics/Statistics';
import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendLits';

export const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />,
      <Statistics stats={statisticalData} />,
      <FriendList friends={friends} />,
    </div>
  );
};
