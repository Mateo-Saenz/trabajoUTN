import React from 'react'
import { products } from '../productsDB'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Bienvenido a Apple Store</h1>
        <div>
            {
                products.map(({categoria, precio, nombre, id}) =>(
                    <Card categoria={categoria} precio={precio} nombre={nombre} id={id} key={id}/>
                ))
            }
        </div>
    </div>
  )
}

const Card = ({categoria, nombre, precio, id}) => {
  return (
    <div key={id}>
        <h3>{categoria}</h3>
        <h2>{nombre}</h2>
        <span>${precio}</span>
        <Link to={'/detail/' + id}>Ver detalles</Link>
    </div>
  )
}

export { Card }

export default Home




