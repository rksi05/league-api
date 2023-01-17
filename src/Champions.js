import React from 'react';
import './Champions.css';

const Champions=({data})=>{
    
    var data1 = Object.entries(data)
    return(
        <>
        <div className="Parallax">
        <div className="App">
        <h1>{d[0]}</h1>
        <h3><i>{d[1].blurb}</i></h3>
        <img src = {d[1].image.full}></img>
        <table>
            <tr>
                <th>Partype</th>
                <td>{d[1].partype}</td>
            </tr>
            <tr>
                <th>Difficulty</th>
                <td>{d[1].info.difficulty}</td>
            </tr>
                <th>Base Armor (Per Lvl)</th>
                <td>{d[1].stats.armor}({d[1].stats.armorperlevel})</td>
            <tr>
                <th>Attack Damage(Per Lvl)</th>
                <td>{d[1].stats.attackdamage}({d[1].stats.attackdamageperlevel}</td>
            </tr>
            </table>
        </div></div>
        </>
    )
}

export default Champions;