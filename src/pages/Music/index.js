import React from 'react';
import {GroupCard } from '../../components';
import groups from '../../data/groups.json';

const renderGroups = (groupList) =>{
    return groupList.map((group,i) => <GroupCard key={i} name= {group.name} genre={group.genre} introduction = {group.introduction} songs = {group.songs}/>)
  }
  
export default () => {
    return renderGroups(groups) 
}