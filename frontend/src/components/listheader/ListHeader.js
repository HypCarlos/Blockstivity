import React from 'react'

const ListHeader = ({ listName }) => {

const signOut = () => {
    console.log('signout')
}



  return (
    <div className='list-container'>
      <h1>{listName}</h1>
      <div className='button-container'>
        <button className='create'>ADD NEW</button>
        <button className='sign-out' onClick={signOut}>SIGN OUT</button>
      </div>
    </div>
  )
}

export default ListHeader
