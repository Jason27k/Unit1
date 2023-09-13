import React from 'react'


function Item({ team, extension }) {
  return (
    <>
        {team}{extension}
        <img src={`/teams/${team}${extension}`} alt={team} className='h-auto max-w-2xl object-contain my-5 mx-auto'/>
    </>
  )
}

export default Item