 import React, { useState, useEffect } from 'react';


import { useHistory, useParams } from 'react-router';

import Loader from '../../Components/Custom/Loader/Loader';


const Weather = () => {
    const {name} = useParams();
    console.log("useparams",name);
    
    //  const [cityName, setCityName] = useState("");
    const [cityInformation, setCityInformation]= useState(null);
    const history = useHistory();

    const handleHistory = ()=>{
        history.goBack();
    }

    useEffect(()=>{
        const handlecityWeatherInformation =async ()=>{
            setCityInformation(null)
            const key = '3dd3d12882582471531c1ab8bf47bc13';
            //const url =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_API_KEY}`;
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${key}`;
            const response = await fetch(url);
            const result = await response.json();
            setCityInformation(result);
        }
        handlecityWeatherInformation();
       
    },[]);

    return (
        <div className="relative w-10/12 rounded-3xl h-5/6 mx-auto mt-7 bg-white flex flex-col">
            { 
            cityInformation ? (
                <>
            <div>
            <h2 className="ml-5 mt-4 font-bold text-2xl">{cityInformation.name}</h2>
            <p className="text-7xl font-extrabold ml-4 mt-5">{cityInformation?.weather[0].temp}ºC</p>
            </div>
            <div className="absolute right-1"><img src={`http://openweathermap.org/img/wn/${cityInformation.weather[0].icon}@4x.png`} alt="" /></div>
            <p className="font-bold text-center p-5">{cityInformation.weather[0].description}</p>
            <div className=" w-11/12 gap-20 font-medium mx-auto mt-7 flex flex-col md:flex-row justify-between items-center">
                <div className="w-1/2">
                    <div className="flex  h-40 flex-col justify-between">
                        <div className="flex justify-between">
                            <p>Temp_max:</p>
                            <p>{cityInformation.main.temp_max}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>humidity</p>
                            <p>{cityInformation.main.humidity}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>pressure</p>
                            <p>{cityInformation.main.pressure}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>grnd_level</p>
                            <p>{cityInformation.main.grnd_level}</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="flex h-40 flex-col justify-between">
                        <div className="flex justify-between">
                            <p>Temp_min:</p>
                            <p>{cityInformation.main.temp_min}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>feels_like</p>
                            <p>{cityInformation.main.feels_like}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>wind speed</p>
                            <p>{cityInformation.wind.speed}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>sea_level</p>
                            <p>{cityInformation.main.sea_level}</p>
                        </div>
                    </div>
                </div>
            </div>
           </> ) : <Loader/> }
        </div>
    );
};

export default Weather;