import React from 'react';
// COMPONENTS IMPORTS
import ProgressBar from '../progressbar/ProgressBar';
import Checkmark from '../checkmark/Checkmark';

const ListItem = ( {task} ) => {
  return (
    <li className='list-item'>
    <div className='info-container'>
      
    <Checkmark/>
      <h4 className='task-title'>{task.title}</h4>
      <ProgressBar/>
      </div>
      <div className='button-container'>
      <button className='edit'>EDIT</button>
      <button className='delete'>DELETE</button>
      </div>
    </li>
    
  )
}

export default ListItem
