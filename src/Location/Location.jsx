import React, { useEffect } from 'react'

export default function Location() {
    function changeColor(){
        let element=document.querySelectorAll('.social')
        for(let i=0 ;i<element.length;i++){
            element[i].addEventListener('mouseenter',function(){
                element[i].classList.add('text-black','bg-white')
            })
            element[i].addEventListener('mouseleave',function(){
                element[i].classList.remove('text-black','bg-white')
            })
        }
    }
useEffect(()=>{
    changeColor()
},[])
  return (
    <>
    <div style={{background:'#2c3e50'}}>
<div className="container h-100 py-5">
    <div className="row text-center text-white py-5 my-5">
        <div className="col-md-4 my-5">
            <h2 className='py-1'>LOCATION</h2>
            <h5 >2215 John Daniel Drive
Clark, MO 65243</h5>
        </div>
        <div className="col-md-4 my-5 ">
        <h2 className='py-1 '>AROUND THE WEB</h2>
        <div className=' d-flex justify-content-center '>
            <div className="social m-1 border border-1 rounded-circle  d-flex justify-content-center p-3 ">
            <i class="fa-brands fa-facebook-f  fs-4"></i>

            </div>
            <div className="social m-1 border border-1 rounded-circle d-flex justify-content-center p-3">
            <i class="fa-brands fa-twitter  fs-4"></i>

            </div>
            <div className="social m-1 border border-1 rounded-circle d-flex justify-content-center p-3">
            <i class="fa-brands fa-linkedin  fs-4"></i>

            </div>
        </div>

        </div>
        <div className="col-md-4 my-5 ">
            <h2 className=' py-1'>ABOUT FREELANCER</h2>
            <h5 >
            Freelance is a free to use, MIT licensed Bootstrap theme created by Route
            </h5>
        </div>
    </div>

</div>




    </div>
    
    
    
    </>
  )
}
