import { useState } from 'react';
import Login from './components/Login';
import Navbar from './components/Navbar'
import UserContext from './contexts/UserContext';
import './css/App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [user, setUser] = useState({})
  return (
    <UserContext.Provider value={{user, setUser}}>
      <div className="App">
      <Navbar />
      <Routes>
        <Route path="*" element={<Login/>}></Route>
        <Route path="/find-love" element={<h1>Find love</h1>}></Route>
        <Route path="/about-team" element={<h1>About Team</h1>}></Route>
        <Route path="/success-story" element={<h1>Success Story</h1>}></Route>
      </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
