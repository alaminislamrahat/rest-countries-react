import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]); 
    const [visitedCountries,setVisitedCountries] = useState([]);
    const [visetedFlags, setVisitedFlags] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[]);


    const handleVisitedCountry = country => {
        console.log('add this to your visited country');
        console.log(country);
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    };

    const handleVisitedFlags = flag =>{
        const newVisitedFlags = [...visetedFlags,flag];
        setVisitedFlags(newVisitedFlags);
    }

    return (
        <div >
            <h3>country : {countries.length}</h3>
            
            <div>
                <h5>visited countries : {visitedCountries.length} </h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}  </li>)
                    }
                </ul>
            </div>

            <div className="flag-container">
                {
                   visetedFlags.map((flag,idx)=><img key={idx} src={flag}></img>)
                }
            </div>

            <div className="country-container">
            {
                countries.map(country => <Country country = {country} key = {country.cca3} handleVisitedCountry = {handleVisitedCountry } handleVisitedFlags={handleVisitedFlags}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;