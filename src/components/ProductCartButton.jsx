import React from 'react'
import { useGlobalContext } from '../context/GlobalContextProvider'
import {products, id} from '../productsDB' 

const ProductCartButton = () => {
    const {isInCart, handleAddProduct, handleDeleteProduct, findProductCart} = useGlobalContext
  return (
    <div>
        {
            isInCart(id)
            ?
            <div>
                <button onClick={() => handleDeleteProduct(id)}>
                -
                </button>
                {findProductCart(id).quantity}
                <button onClick={() => handleAddProduct(id)}>
                +
                </button>
            </div>
            :
            <button onClick={() => handleAddProduct(id)}>Añadir al carrito</button>
            }
            
    </div>
  )
}

export default ProductCartButton