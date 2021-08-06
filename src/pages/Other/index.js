import React,{ useState }  from 'react';
import {RecomendationForm, RecomendationList} from '../../components';

export default () => { 
    const [recomendations,setRecomendations] =useState();

    return (
        <>
            <RecomendationForm updateList={setRecomendations}/>
            {recomendations && <RecomendationList recomendations = {recomendations}/>}
        </>
    )

}
      