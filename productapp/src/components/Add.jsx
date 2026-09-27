
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Add = () => {
  var[product,setproduct]=useState({Name:"",Disc:"",price:"",Image:""})
  var navigate=useNavigate()


  const inputHandler=(e)=>{
    setproduct({...product,[e.target.name]: e.target.value})
    console.log(product)
  }


  const addproduct=()=>{
    axios.post("http://localhost:3000/add",product)
    .then((res)=>{
      alert(res.data)
      navigate("/view")
    })
  }


  return (
    <div class="flex flex-col items-center p-10 space-y-4">
        <h3>add page</h3>
        <input class='rounded outline p-2'  type="text" placeholder='Product name'
        name="Name" value={product.Name} onChange={inputHandler}/>


        <input class='rounded outline p-2'  type="text" placeholder='Product price'
        name="price" value={product.price} onChange={inputHandler} />


        <input class='rounded outline p-2'  type="text" placeholder='Product img link'
        name="Image" value={product.Image} onChange={inputHandler} />


        <input class='rounded outline p-2'  type="text" placeholder='Product disc'
        name="Disc" value={product.Disc} onChange={inputHandler}  />


        <button class="bg-blue-600 text-white py-2 mt-3 p-3 rounded hover:bg-green-700"
        onClick={addproduct}>
            add product
        </button>
    </div>
  )
}


export default Add
