import React from 'react'
import { useParams } from 'react-router'
import { products } from '../productsDB'
import Error404 from '../components/Error404'
import { useGlobalContext } from '../context/GlobalContextProvider'
import { ProductCartButton } from '../components/ProductCartButton'

const ProductDetail = () => {
    const {id} = useParams()
    const productFound = products.find((product) => product.id === Number(id))
    const {handleAddProduct, isInCart, findProductCart, handleDeleteProduct} = useGlobalContext()
  return (
    <div>
        {
            productFound 
            ?
            <>
            <h2>{productFound.nombre}</h2>
            <span>Precio: ${productFound.precio}</span>
            <ProductCartButton id={productFound.id}/>
            </>
            :
            <Error404 mensaje={'Producto no encontrado'}/>
        }

    </div>
  )
}

export default ProductDetail