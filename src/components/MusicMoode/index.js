import React, { useEffect, useState } from 'react';
import lorepicsum from '../../connections/lorepicsum';
import quotesGen from '../../connections/quotesGen';
import axios from 'axios';


export default ({toggle}) => {
    const [image, setImage] = useState();
    const [frase, setFrase] = useState();
    const [redo, setRedo] = useState(false);

    useEffect(() => {
        function getImage() {
            setImage(lorepicsum());           
        }
        function getFrase(){
            quotesGen()
            .then(data => setFrase(data))
            .catch(e=>console.warm(e));            
        }
        getImage();
        getFrase();
    },[redo])

    return (
        <>
        <span onClick={toggle} style={{cursor: "pointer"}}>x</span>
        { image ?
            <>
            <img src={image}/>
            </>
        : <h2>generator generating</h2> } 
        { frase ?
            <p>{frase}</p>:
            <></>
        }       
        <span onClick={()=>setRedo(!redo)} style={{cursor: "pointer"}}>Generate your Album</span>
        </>
    )
}