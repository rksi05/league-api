import React from 'react';

const Colors=({data})=>{
    
    var data1 = Object.entries(data)
    console.log(data1)
    return( 
        <>
          {
            data && data1.map((d)=>{
               return(
                <div className="container">
                <button class="btn"><a href="./Page.html"><b>✦ {d[0]}</b>: <i>{d[1].title} ✧</i></a></button>
                <p>☽. _________________ .☾</p>
                </div>)
           })
        }
    </>
    )
}

export default Colors;