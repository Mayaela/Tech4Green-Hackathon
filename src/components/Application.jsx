import React, { Component } from 'react';
import Applist from '../applist.json';

const Application =()=>{
  return (
    <div>
      <h2>{Applist[1].Company}</h2>
      <p>{Applist[1].Category}</p>
      <p>{Applist[1].Description}</p>
    </div>
  );
}

export default Application;