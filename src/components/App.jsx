import friends from '../data/friends.json';
import user from '../data/user.json';
import statisticalData from '../data/statistical-data.json';
import transactions from '../data/transactions.json';

import { Statistics } from './Statistics/Statistics';
import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendLits';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import Container from './Container/Container';

export const App = () => {
  return (
    <Container>
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
    </Container>
  );
};
