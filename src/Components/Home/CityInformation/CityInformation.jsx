import React from 'react';

const CityInformation = ({name, temp,icon, handleHistory}) => {
    temp = Math.trunc(temp-273.15);
    return (
        <div className="relative w-10/12 rounded-3xl h-44 mx-auto mt-7 bg-white flex flex-col">
            <div>
            <h2 className="ml-5 mt-4 font-bold text-2xl">{name}</h2>
            <p className="text-2xl md:text-7xl font-extrabold ml-4 mt-5"> {temp} ºC</p>
            </div>
            <div className="absolute right-1"><img className="w-32 md:w-48" src={`http://openweathermap.org/img/wn/${icon}@4x.png`} alt="" /></div>
            <button className="text-xs mx-auto rounded-full h-9 md:h-20 mt-5 md:mt-0 md:mb-2 w-1/2 md:w-2/12 bg-light_blue font-bold" onClick={handleHistory}>See more</button>
        </div>
    );
};

export default CityInformation;