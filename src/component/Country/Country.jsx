import { useState } from 'react';
import './country.css'

const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
    const {name,flags,population,area, cca3} = country;
    const [visited,setVisited] = useState(false);

    const handleVisited = ()=>{
        setVisited(!visited);
    }

  
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color : visited && 'white'}}>country : {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>
            <button onClick={()=> handleVisitedFlags(country.flags.png)}>add flag</button> <br />
            <button onClick={()=>handleVisitedCountry(country)}>Cheak visited</button> <br />
            <button onClick={handleVisited}>{visited ?'visited' : 'going'}</button> <br />
            <p style={{color : visited && 'yellow'}}>{visited ? 'I have visited this country.' : 'I want to visit!!!'}</p>
        </div>
    );
};

export default Country;