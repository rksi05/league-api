import React,{useEffect,useState} from 'react';
import "./Champions.css";
import axios from 'axios';


const Champions = (/*{ data }*/) => {
  
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
    //var data1 = Object.entries(data);

  //console.log(data)
  return (
    <>
      <div className="Parallax">
        <div className="App">
          {/* <h1>{data[0]}</h1> */}
          <h3>
            {/* <i>{data[1].blurb}</i> */}
          </h3>
          {/* <img src={data[1].image.full}></img> */}
          <h1>hi</h1>
          <table>
            <tr>
              <th>Partype</th>
              {/* <td>{data[1].partype}</td> */}
            </tr>
            <tr>
              <th>Difficulty</th>
              {/* <td>{data[1].info.difficulty}</td> */}
            </tr>
            <th>Base Armor (Per Lvl)</th>
            <td>
              {/* {data[1].stats.armor}({data[1].stats.armorperlevel}) */}
            </td>
            <tr>
              <th>Attack Damage(Per Lvl)</th>
              <td>
                {/* {data[1].stats.attackdamage}(
                {data[1].stats.attackdamageperlevel} */}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Champions;
