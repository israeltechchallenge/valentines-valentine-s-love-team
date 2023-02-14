
import FindLove from './components/FindLove/FindLove';
import { useState } from 'react';
import Login from './components/Login';
import UserContext from './contexts/UserContext';
import './css/App.css';

function App() {
  const [user, setUser] = useState({})
  return (
    <UserContext.Provider value={{user, setUser}}>
      <div className="App">
        <FindLove />
      </div>
    </UserContext.Provider>
  );
}

export default App;
