import React,{ useState }  from 'react';
import {GroupCard, RecomendationForm, RecomendationList, Jokes} from './components';
import groups from './data/groups.json';


const renderGroups = (groupList) =>{
  return groupList.map((group,i) => <GroupCard key={i} name= {group.name} genre={group.genre} introduction = {group.introduction} songs = {group.songs}/>)
}


function App() {
  const [recomendations,setRecomendations] =useState();
  function updateRecomendationList (recomendationList) {
    setRecomendations(recomendationList);
  }
  return (
    <main>
      <Jokes/>
      <h1>Personal Playlist</h1>
      {renderGroups(groups)}

      <RecomendationForm updateList={updateRecomendationList}/>
      {/* {recomendations && <RecomendationList recomendations = {recomendations}/>} */}
    </main>
  );
}

export default App;
