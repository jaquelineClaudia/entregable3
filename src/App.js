import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import SearchBox from "./components/SearchBox";
import ResidentsList from "./components/ResidentsList";
import LocationInfo from './components/LocationInfo';
import './styles.css';

function App() {

  const [location, setLocation] = useState("");

  useEffect(() => {
    const random = Math.floor(Math.random() * 126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
    .then(res => setLocation(res.data))
  }, []);

  console.log(location)

  return (
    <div className="App">
      <div className='head'>
        <h1>Rick and Morty</h1>
      </div>
  
      <SearchBox setLocation={setLocation} />
      <LocationInfo 
        name={location.name}
        type={location.type}
        dimension={location.dimension}
        population={location.residents?.length}
        />
      <ResidentsList resident={location.residents}/>
    
    </div>
  );
}

export default App;

