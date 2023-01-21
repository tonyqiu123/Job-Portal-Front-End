import React from 'react'
import '../css/home.css'

function HomeProject({image, href}) {
  return (
    <a href={href} target="_blank" className='HomeProjectContainer'>
        <img src={image}/>
    </a>

  )
}

export default HomeProject