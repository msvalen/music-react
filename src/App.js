import React,{ useState }  from 'react';
import style from './style.css';

import { Header, Nav, Footer } from './layout';
import { Home, Music, Other, Error} from './pages'

import { useTheme } from './contexts/Theme';
import {  Switch, Route } from 'react-router-dom';
import ThemeChanger from './components/ThemeChanger';

/* const renderGroups = (groupList) =>{
  return groupList.map((group,i) => <GroupCard key={i} name= {group.name} genre={group.genre} introduction = {group.introduction} songs = {group.songs}/>)
}
 */

function App() {
  const theme = useTheme();
  return (
    <main className={theme.current.color}>
      <ThemeChanger/>
      <Header />
      <Nav/>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/music"><Music/></Route>
        <Route path="/other"><Other /></Route>
        <Route path="/error"><Error /></Route>
      </Switch>
      
      <Footer/>
    </main>
  );
}

export default App;
