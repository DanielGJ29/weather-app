import React, {useState} from 'react';

import WeatherForm from '../../Components/Home/Form/WeatherForm';
import CityInformation from '../../Components/Home/CityInformation/CityInformation';
import Loader from '../../Components/Custom/Loader/Loader';
import { useHistory } from 'react-router';

const Home = () => {
    const history = useHistory();
    //STATE
    const [cityName, setCityName] = useState("");
    const [cityInformation, setCityInformation]= useState(null);
    const [loader, setLoader] = useState(false);

    //FUNCIONES
    const handlecityWeather = ({value})=>{
        setCityName(value);
        console.log(value)
    }

    const handleSearchWeather = async e =>{
        e.preventDefault();
        const inputSearch = document.getElementById("input-search");
        inputSearch.value="";
        setCityInformation(null);
        history.push("/");
        setLoader(true);
        const key = '3dd3d12882582471531c1ab8bf47bc13';
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;
        const response = await fetch(url);
        const result = await response.json(response);
        setCityInformation(result);
        setLoader(false);
        console.log(result)
    }
    const handleHistory =()=>{
        history.push(`/weather/${cityInformation.name}`);
        setCityInformation(null);
    }
    const handleHome=()=>{
        setCityInformation(null);
    }

    return (
        <>
        { 
        <div className="">
                <WeatherForm 
                handlecityWeather={handlecityWeather} 
                handleSearchWeather={handleSearchWeather}
                handleHome={handleHome}/>
              
            {loader && <Loader/>}
            {
                cityInformation && (
                    <CityInformation 
                    name={cityInformation.name}
                    temp={cityInformation.main.temp}
                    icon={cityInformation.weather[0].icon}
                    handleHistory={handleHistory}/>
                )
            }
           
        </div> 
        } 
        </>
    );
};

export default Home;