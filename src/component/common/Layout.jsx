import React from 'react'
import '../../styles/index.scss'

const Layout = (props) => {
  const {children} = props

  return <div className="layout">{children}</div>
}

export default Layout
