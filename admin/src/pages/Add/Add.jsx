import React, {  useState } from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'

const Add = ({url}) => { 

  const [image,setImage] =useState(false);
  const [data,setData] =useState({
    name:"",
    description:"",
    price:"",
    category:"Smart Watch"
  })
   const onChangeHandler = (event)=>{
    const name =event.target.name;
    const value =event.target.value;
    setData(data=>({...data,[name]:value}))
   }

   const onSubmitHandler = async (event)=> {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name",data.name)
    formData.append("description",data.description)
    formData.append("price",Number(data.price))
    formData.append("category",data.category)
    formData.append("image",image)
    const response = await axios.post(`${url}/api/pair/add`,formData);
    if (response.data.success) {
      setData({
        name:"",
        description:"",
        price:"",
        category:"Smart Watch"
      })
      setImage(false)
      toast.success(response.data.message)
    }else{
      toast.error(response.data.message)
    }

   }

   return (
    <div className='add' >
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />
        </div>
        <div className="add-product-name flex col">
          <p>Product name</p>
          <input onChange={ onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea onChange={ onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write description of product' required ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select onChange={ onChangeHandler}  name="category" className='option'>
              <option value="Smart Watch">Smart Watch</option>
              <option value="Headphone">Headphone</option>
              <option value="Earuds">Earbuds</option>
              <option value="Power Bank">Power Bank</option>
              <option value="Speaker">Speaker</option>
              <option value="Ring">Ring</option>
              <option value="Chargers">Chargers</option>
              <option value="Customized">Customized</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input onChange={ onChangeHandler} value={data.price} type="Number" name='price' placeholder='1799Rs.' />
          </div>
        </div>
        <button type='submit' className='add-btn' >ADD</button>
      </form>
    </div>
  )
}

export default Add
