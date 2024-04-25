import './App.css'

import userData from './UserData.json';
import friends from './FriendsList.json';

import Profile from './components/Profile/Profile.jsx';
import FriendList from './components/FriendList/FriendList.jsx';

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList
        friends={friends}
      />
    </>
  )
}

export default App