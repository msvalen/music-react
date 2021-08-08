import React, { useEffect, useState } from 'react';
import lorepicsum from '../../connections/lorepicsum';
import quotesGen from '../../connections/quotesGen';


export default ({toggle}) => {
    const [image, setImage] = useState();
    const [frase, setFrase] = useState();
    const [redo, setRedo] = useState(false);

    useEffect(() => {
        function getFrase(){
            quotesGen()
            .then(data => {
                setImage(lorepicsum());
                setFrase(data)                
                })
            .catch(e=>console.warm(e));            
        }        
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