import React from 'react';
import "./Champions.css";
// my about the author page..i cannot get the gif to align fully left so i gave up


const About=() => {
    return (
        <>
            <div className="Parallax">
            <div className="App">
                
                <h4><b>🪐 Author: Christina G. 🖇</b></h4>
                <p>‧͙⁺˚*•̩̩͙✩•̩̩͙*˚⁺‧͙⁺˚*•̩̩͙✩•̩̩͙*˚⁺‧͙⁺˚*•̩̩͙✩•̩̩͙*˚⁺‧͙</p>
                <p>~ mains: sera, morg, akali...?</p>
                <p>~ github: rksi05 </p>
                <p>~ discord: rksi#1214</p>
                <p>~ add me on league!! rksi05 #NA1 </p>
                <img src="sera.gif"align="left" position="fixed"></img>
                <br></br>
            </div>
            </div>
        </>
    );
}

export default About;