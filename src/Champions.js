import React,{useEffect,useState} from 'react';
import "./Champions.css";
import axios from 'axios';
import { Card, Input, Image } from 'semantic-ui-react'

// the search function/second page!!, 
//source: https://www.freecodecamp.org/news/build-a-search-filter-using-react-and-react-hooks/ 
// cards: https://react.semantic-ui.com/views/card/#types-card 

export default function Posts() {
    const [colorsData,setColorsData]=useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    useEffect(()=>{
        axios.get('http://ddragon.leagueoflegends.com/cdn/13.1.1/data/en_US/champion.json')
            .then(res=>{
                setColorsData(res.data.data)
            })
            .catch(err=>{
                console.log(err);
            })
    },[])

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = data1.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(colorsData)
        }
    }

    var data1 = Object.entries(colorsData)
    var data2 = Object.entries(filteredResults)
    console.log(data1);
    console.log(data2);
    return (
        <div className="Parallax">
            <Input icon='search'
                placeholder='Start typing...'
                onChange={(e) => searchItems(e.target.value)}
            />
            <Card.Group style={{ marginTop: 20 }}>
                {searchInput.length > 1 ? (
                    data2.map((item) => {
                        return (
                            <Card>
                                <Card.Content>
                                    <Card.Header><b>{item[1][0]}</b>: <i>{item[1][1].title}</i></Card.Header>
                                    <Card.Description>
                                        <br></br><b>Blurb: </b> {item[1][1].blurb}
                                        <br></br>
                                        <br></br><b>Partype: </b> {item[1][1].partype}
                                        <br></br>
                                        <br></br><b>Class: </b> {item[1][1].tags[0]}, {item[1][1].tags[1]}
                                        <br></br>
                                        <br></br><b>Stats: </b>
                                        <br></br>
                                        <table>
                                            <tr>
                                                <td>Difficulty</td>
                                                <td><i>{item[1][1].info.difficulty}</i></td>
                                            </tr>
                                            <tr>
                                                <td>Attack Damage</td>
                                                <td><i>{item[1][1].stats.attackdamage}</i></td>
                                            </tr>
                                            <tr>
                                                <td>HP</td>
                                                <td><i>{item[1][1].stats.hp}</i></td>
                                            </tr>
                                            <tr>
                                                <td>Mana</td>
                                                <td><i>{item[1][1].stats.mp}</i></td>
                                            </tr>
                                            <tr>
                                                <td>Movespeed</td>
                                                <td><i>{item[1][1].stats.movespeed}</i></td>
                                            </tr>
                                            </table>
                                        <p>☽. ________________________________________________________________________________________________________________________________________________ .☾</p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })
                ) : (
                    data1.map((item) => {
                        return (
                            <Card>
                                <Card.Content>
                                </Card.Content>
                            </Card>
                        )
                    })
                )}
            </Card.Group>
            
        </div>
    )
}
