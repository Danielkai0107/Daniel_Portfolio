import React from 'react'
import A from '../images/shoe-img.png'

function MenuItem() {
  return (
    <ul className='menu_list_item'>
      <li className='menu_list_item_img'>
        <img src={A} alt="" />
      </li>
      <li className='menu_list_item_desc'>
        <p>PROJECT 01</p>
        <span>HTML / CSS / JavaScript</span>
      </li>
    </ul>
  )
}

export default MenuItem
