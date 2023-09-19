import React from 'react'
import { useGlobalContext } from '../context/GlobalContextProvider'
const Header = () => {
  const {nombre} = useGlobalContext()
  return (
    <header>
        <h1>{nombre}</h1>
    </header>
  )
}

export default Header