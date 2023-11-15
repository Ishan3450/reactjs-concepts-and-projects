import React from 'react'
import {products} from "../data"
import Product from "./Product"
import "./Products.css"

function Products() {
  return (
    <div className='products-grid'>
      {products.map((product) => <Product key={product.id} data={product} />)}
    </div>
  )
}

export default Products