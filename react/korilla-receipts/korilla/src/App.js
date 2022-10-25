import { useState } from 'react';
import './App.css';
import Receipts from './components/Receipts';
import Data from './components/Data';

function App() {
  
  const [receipts, setReceipts] = useState(Data);

  return (
    <div className="App">
      <Receipts receipts={receipts} />
    </div>
  );
}

export default App;
