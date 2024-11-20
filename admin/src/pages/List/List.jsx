import React, { useEffect, useState } from 'react'
import  './List.css'
import axios from "axios"
import {assets} from '../../assets/assets'
import {toast} from "react-toastify"

const List = ({url}) => {
  const[list,setList]= useState([]);

  const fechList = async () => {
    const response = await axios.get(`${url}/api/pair/list`);
    if (response.data.success) {
      setList(response.data.data);
    }
    else{
      toast.error("Error")
    }
  }

  const removePair = async(pairId) =>{
    const response = await axios.post(`${url}/api/pair/remove`,{id:pairId});
    await fechList();
    if (response.data.success) {
      toast.success(response.data.message)
    }
    else{
      toast.error("Error");
    }
  }

  useEffect(()=>{
    fechList();
  },[])


  return (
    <div className='list add flex-col' >
      <p>All Products</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className='list-table-format' >
              <img src={`${url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}.Rs</p>
              <img onClick={()=>removePair(item._id)} className='cursor' src={assets.dust_icon} alt="" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
