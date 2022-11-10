import axios from 'axios'
import React, { useEffect, useState } from 'react'

   



export default function Api() {
    const imgsrc='https://image.tmdb.org/t/p/w500'/////for path img
    let [list,setlist]=useState([])
async function  getdatafromAPI() {
    let {data}=await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=ad5b8a40f505d647529a35d8a53e24fd ')  ////destruct data from api
  
    setlist(data.results)
    
}
/////to call function  mounting phase
useEffect(()=>{
    getdatafromAPI()
},[])

  return (
  <>

  <div className="container my-3 text-center ">

{/* condition for loading  */}
  {list.length>0?
    <div className="row g-3 py-5 text-center">
    {list.map((img ,index)=>
      <div className="col-md-3" key={index}>
      <div className="inner h-50">
          <img className='w-100' src={imgsrc+img.poster_path}   />
          {/* condition because i found movies >>title or name */}
          
          {img.title?
          <h4 className='py-2'>{img.title}</h4 >:
          <h4 className='py-2'>{img.name}</h4 >
        }
         
          
         
       
      </div>
  </div>
    
    
    )}
  
  </div>
  :
  <i className='fa fa-spinner fa-5x fa-spin'></i>
  



}
  </div>
  </>
  )
}
