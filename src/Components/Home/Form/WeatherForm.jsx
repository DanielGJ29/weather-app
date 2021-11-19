import React from 'react';
import { Link } from 'react-router-dom';

import "./WeatherForm.Styles.css";
const WeatherForm = ({handlecityWeather, handleSearchWeather, handleHome}) => {
    return (
        <>
        <div className="flex justify-between items-center h-16 bg-blue">
            <div className="text-white ml-4" onClick={()=>handleHome()}><Link to="/"><p>Weather</p><p>Home</p></Link></div> 
            <form className="w-1/3" action="" onSubmit={(e)=>handleSearchWeather(e)}>
                <input id="input-search" className="input-search pl-4 font-semibold w-full h-10 rounded-full" type="text" placeholder="City Name" onChange={({target})=> handlecityWeather(target)} />
            </form>
            <div className="none"></div>
        </div>
        </>
    );
};

export default WeatherForm;