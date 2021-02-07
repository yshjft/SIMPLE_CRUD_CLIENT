import React from 'react'
import {NavLink} from 'react-router-dom'
import '../../styles/index.scss'

const items = [
  {
    to: '/',
    itemName: 'POSTS'
  },
  {
    to: '/write',
    itemName: 'WRITE'
  }
]

const Header = () => {
  return (
    <div className="header">
      <div className="title">SIMPLE CRUD</div>
      <div>
        {items.map((item, index) => (
          <NavLink
            key={index}
            exact={item.to === '/'}
            to={item.to}
            className="headerItem"
            activeClassName="activeHeaderItem"
          >
            {item.itemName}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Header
