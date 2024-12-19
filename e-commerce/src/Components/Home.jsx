import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Home() {

    const[data,setData]=useState([]);
    const[error,setError]=useState(null);


    const dataFetch=async()=>{
        try{
            const response= await axios.get("https://fakestoreapi.com/products")
            setData(response.data)
        }
        catch(error){
            setError(error)
        }
      
     }

   useEffect(()=>{
    dataFetch()
   },[])
  return (
    <div>
        {data.map(i=> <div key={i.id}>
            <h1>{i.category}</h1>
            <p>{i.price}</p>
            <img src={i.image} alt="imgae" width={200} height={300}/>
            <p>{i.rating.count}</p>
        </div>)}
    </div>
  )
}


export default Home