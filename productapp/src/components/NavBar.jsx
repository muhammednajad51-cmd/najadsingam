import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div>
        <nav class="bg-amber-600 text-white p-4 flex items-center">
            <h5 class="text-xl flex-grow">FLIPKART</h5>
           
            <Link to="/home">
            <button class="bg-white text-blue-600
                px-2 py-1  rounded">HOME</button>
            </Link>


            <Link to="/add">
            <button class="bg-white text-blue-600
                px-2 py-1  rounded">ADD</button>
            </Link>


            <Link to="/view">
            <button class="bg-white text-blue-600
                px-2 py-1 rounded">VIEW</button>
            </Link>
<Link to="/my orders">
            <button class="bg-white text-blue-600
                px-2 py-1  rounded">MY ORDERS</button>
            </Link>


        </nav>
    </div>
  )
}


export default NavBar
