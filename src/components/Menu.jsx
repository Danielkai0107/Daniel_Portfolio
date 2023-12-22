import React from 'react'
import MenuItem from './MenuItem'

function Menu() {
  return (
    <main className='menu'>
      <ul className='menu_title'>
        <li>
          <h2>Categories +</h2>
        </li>
        <li>
          <h1>HTML</h1>
          <h1>CSS</h1>
          <h1>JavaScript</h1>
        </li>
      </ul>
      <article className='menu_list'>
        <MenuItem/>
        <MenuItem/>
      </article>
    </main>
  )
}

export default Menu
