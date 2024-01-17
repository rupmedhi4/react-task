import React, { useState, useEffect, useDeferredValue } from 'react';
import './Form.css'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addLocationData } from '../../Redux/Slices/DataSlice'; 


export default function Form() {
    const [regions, setRegions] = useState([]);
    const [countries, setCountries] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCallingCode, setSelectedCallingCode] = useState('');
    const [selectedCurrency, setSelectedCurrency] = useState('');
    const [locationData, setLocationData] = useState([]);
    const dispatch = useDispatch()



    useEffect(() => {

        axios.get('https://restcountries.com/v2/all')
            .then(response => {
                const uniqueRegions = [...new Set(response.data.map(country => country.region))];
                setRegions(uniqueRegions);
                console.log(uniqueRegions);
            })
            .catch(error => {
                alert('Error fetching regions:', error);
            });
    }, []);

    const handleRegionChange = (region) => {
        axios.get(`https://restcountries.com/v2/region/${region}`)
            .then(response => {
                setCountries(response.data);
                console.log(response);
                setSelectedRegion(region);
                setSelectedCountry('');
            })
            .catch(error => {
                alert('Error fetching countries:', error);
            });
    };

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
        console.log(country);
    };
    const handleCallingCode= (callingCode) => {
        setSelectedCallingCode(callingCode);
    };
    const handleCurrency= (currency) => {
        setSelectedCurrency(currency);
    };

    const handleAddLocation = () => {
        const data =[ {
            region:selectedRegion,
            country:selectedCountry,
            callingCode : selectedCallingCode,
            currency:selectedCurrency

        }]
        dispatch(addLocationData(data))
    };
    console.log(locationData);

    return (
        <div className="form-container">
            <h1>Add Location</h1>
            <hr />
            <div className="input-container">

                <select id="region"  value={selectedRegion} onChange={(e) => handleRegionChange(e.target.value)} placeholder="Select Region"  >
                    
                    <option value="" disabled>Select Region</option>
                    
                      {regions.map((region) => (
                        <option key={region} value={region}>
                            {region}
                        </option>
                    ))}
                </select>

                <select id="country" value={selectedCountry} onChange={(e) => handleCountryChange(e.target.value)} placeholder="Select Country" >
                   
                     <option value="" disabled>Select Country</option>
                    {countries.map((country) => (
                        <option key={country.name} value={country.name}>
                            {country.name}
                        </option>
                    ))}
                </select>

                <select id="Calling code" value={selectedCallingCode} onChange={(e) => handleCallingCode(e.target.value)} placeholder="Select Calling code" >
                   
                     <option value="" disabled>Select Calling code</option>
                    {countries.map((country) => (
                        <option key={country.callingCodes} value={country.callingCodes}>
                            {country.callingCodes}
                        </option>
                    ))}

                </select>

                <select id="currency" value={selectedCurrency} onChange={(e) => handleCurrency(e.target.value)} placeholder="Select Currency" >
                   
                     <option value="" disabled>Select Currency</option>
                    {countries.map((country) => (
                        <option key={country.currencies[0].code} value={country.currencies[0].code}>
                            {country.currencies[0].code}
                        </option>
                    ))}

                </select>

            </div>
            <button id="addLocationBtn" onClick={handleAddLocation}>
                Add Location
            </button>
        </div>
    )
}
