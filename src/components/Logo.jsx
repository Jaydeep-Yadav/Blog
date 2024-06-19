import React from 'react'
import logo from '../assets/logo.png'

function Logo({width = '100px'}) {
  return (
    <img src={logo} alt="logo" width={50} height={50}/>
  )
}

export default Logo