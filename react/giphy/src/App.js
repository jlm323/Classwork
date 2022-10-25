import Gif from './components/Gif';
import { useState } from 'react';
import './App.css';


function App() {
  let [gif, setGif] = useState([])

    const getGif = async () => {
        let api = 'l8CEg8E4B4WaZDZBFr4hK8FQ84lLIt0P'
        let response = await fetch(api)
        let json = await response.json()
        console.log(json)
        setGif(json)
    }

  return (
    <div className="App">
      <Gif />
    </div>
  );
}

export default App;
