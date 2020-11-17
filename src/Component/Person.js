import React, { Component, useState  } from 'react';


function person(props) {
const [isOpen, setisOpen] = useState(false) 
    
    return ( 
        <>
        {isOpen ?(<div>
            <h1>{props.name}</h1>
            <img src={props.image} alt=""/>
            <img src={props.bio} alt=""/>        
            <button onClick={()=> setisOpen(false)}>{props.title}</button>
            </div>):(
            <button onClick={()=> setisOpen(true)}>{props.title}</button>
            )}
        

        </>
    );
}

export default person;