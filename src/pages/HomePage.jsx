import React from 'react'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import Intro from '../components/Intro'
import projectData from '../library/projectData.js'

function HomePage() {
  return (
    <>
      <Navbar />
      <Intro/>
      {
        projectData.map((item)=>
        <Menu key={item.id} item={item}/>
        )
      }
    </>
  )
}

export default HomePage
