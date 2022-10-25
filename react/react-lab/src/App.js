import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <HomePage/>
      <Route path="/employee" element={<Employee />}/>
    </div>
  );
}

export default App;
