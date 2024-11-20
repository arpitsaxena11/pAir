import React, { useContext } from 'react'
import './ProductDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import ProductItem from '../ProductItem/ProductItem'

const ProductDisplay = ({category}) => {

    const {products_list} = useContext(StoreContext)

  return (
    <div className='product-display' id='product-display'>
        <h2>Highly Sale Products</h2>
        <div className="product-display-list">
            {products_list.map((item,index)=>{
                if(category==="All" || category===item.category){
                    return <ProductItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                } 
            })}
        </div>
    </div>
  )
}

export default ProductDisplay
