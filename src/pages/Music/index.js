import React, { useEffect, useState } from 'react';
import {GroupCard } from '../../components';
import groups from '../../data/groups.json';


  
export default () => {
    const renderGroups = (groupList) =>{
        return (groupList.map((x,i) => <GroupCard key={i} name= {x.name} genre={x.genre} introduction = {x.introduction} albums = {x.albums}/>));
      }   

    return renderGroups(groups);
}