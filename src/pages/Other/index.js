import React,{ useState }  from 'react';
import {RecomendationForm, RecomendationList,MusicMoode} from '../../components';

export default () => { 
    const [recomendations,setRecomendations] =useState();
    const [albumGenerator, setAlbumGenerator] = useState(false);

    const toggle = () => {
        console.log(albumGenerator);
        setAlbumGenerator(!albumGenerator);
    }

    return (
        <>
            
            {  albumGenerator ?             
             <MusicMoode toggle={toggle}/>:
             <span onClick={toggle}>Get Album</span> }
            <RecomendationForm updateList={setRecomendations}/>
            {recomendations && <RecomendationList recomendations = {recomendations}/>}
        </>
    )

}
      