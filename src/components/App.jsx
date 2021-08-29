import friends from '../friends.json';
import user from '../user.json';
import statisticalData from '../statistical-data.json';
import transactions from '../transactions.json';

import { Statistics } from './Statistics/Statistics';
import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendLits';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

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
      <TransactionHistory transactions={transactions} />;
    </div>
  );
};
