import React,{useEffect,useState} from 'react';
import Colors from './Colors';
import axios from 'axios';

const Home=()=>{
    const [colorsData,setColorsData]=useState([])
    useEffect(()=>{
        axios.get('http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json')
            .then(res=>{
                console.log('Response from main API: ',res.data.data)
                setColorsData(res.data.data)
            })
            .catch(err=>{
                console.log(err);
            })
    },[])
    return(
        <>
            <Colors data={colorsData}/>
        </>
    )
}

export default Home;