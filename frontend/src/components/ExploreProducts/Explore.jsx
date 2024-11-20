import React from 'react'
import './Explore.css'
import { product_list } from '../../assets/frontend_assets/assets'

const Explore = ({category,setCategory}) => {
  return (
    <div className='explore-product'id='explore-product'>
        <h1>Check latest Products</h1>
        <p className='explore-product-text'>Welcome to pAir accessories. Discover a wide range of products, from smartwatches to devices like speakers, headphones.</p>
        <div className="explore-product-list">
          {product_list.map((item,index)=>{
            return(
              <div onClick={()=>setCategory(prev=>prev===item.product_name?"All":item.product_name)} key={index} className='explore-product-list-item'>
                <img className={category===item.product_name?"active":""} src={item.product_image} alt="" />
                <p>{item.product_name}</p>
              </div>
            )
          })}
        </div>
        <hr />
    </div>
  )
}

export default Explore
