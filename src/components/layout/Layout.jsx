import React from 'react'

const Layout = ({children}) => {
  return ( 
    <div>
        <Nav />
        <Main> {children} </Main>
    </div>
  )
}

export default Layout

