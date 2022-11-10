import React from 'react'
import style from './About.module.css'
export const About = () => {
  return (
   <>
   <section  style={{background:'#1abc9c',padding:'10px 0px'}}>

   <div className="container text-white text-center py-3 my-4" >

<h1 className=' mb-5 ' style={{fontSize:"50px",letterSpacing:'2px',fontWeight:'700'}}>ABOUT
</h1>
 
{/* for icons star and 1wo lines */}
<div className={style.icon}>
<div className={style.line}></div>
  <i class="fa-solid fa-star  fa-2xl mb-5 mx-3 "></i>
  <div className={style.line}></div>
</div>
{/* for contant section about */}
<div className="row   lead text-start" style={{fontWight:'600',fontSize:"25px"}}>
    <div className="col-md-4 offset-md-2">
        <p>
        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
        </p>
    </div>
    <div className="col-md-4">
        <p>
        You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
        </p>
    </div>
</div>
</div>
   
</section>
   
   
   </>
  )
}
