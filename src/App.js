import React,{ useState }  from 'react';
import GroupCard from './components/GroupCard';
import groups from './data/groups.json';
import RecomendationForm from './components/RecomendationForm';
import RecomendationList from './components/RecomendationList';


const renderGroups = (groupList) =>{
  return groupList.map(group => <GroupCard name= {group.name} genre={group.genre} introduction = {group.introduction} songs = {group.songs}/>)
}


function App() {
  const [recomendations,setRecomendations] =useState();
  function updateRecomendationList (recomendationList) {
    setRecomendations(recomendationList);
  }
  return (
    <main>
      <h1>Personal Playlist</h1>
      {renderGroups(groups)}

      <RecomendationForm updateList={updateRecomendationList}/>
      {/* {recomendations && <RecomendationList recomendations = {recomendations}/>} */}
    </main>
  );
}

export default App;
