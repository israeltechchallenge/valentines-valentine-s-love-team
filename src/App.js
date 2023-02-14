
<<<<<<< HEAD
import FindLove from './components/FindLove/FindLove';
=======
import { useState } from 'react';
import Login from './components/Login';
import UserContext from './contexts/UserContext';
>>>>>>> main
import './css/App.css';

function App() {
  const [user, setUser] = useState({})
  return (
<<<<<<< HEAD
    <div className="App">
      <FindLove />
    </div>
=======
    <UserContext.Provider value={{user, setUser}}>
      <div className="App">
      </div>
    </UserContext.Provider>
>>>>>>> main
  );
}

export default App;
