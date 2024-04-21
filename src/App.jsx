import './App.css'
import userData from './UserData.json';
import Profile from './components/Profile/Profile.jsx';

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
    </>
  )
}

export default App