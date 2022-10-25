
import { createContext, useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import items from './components/data';

export const UserContext = createContext()

function App() {

  let [item, setItem] = useState("");
  useEffect(() => {
    setItem(items)
  }, [])

  return (
    <div className="App">
      <UserContext.Provider value={item}>
        <Home />
      </UserContext.Provider>
    </div>
  );
}

export default App;
