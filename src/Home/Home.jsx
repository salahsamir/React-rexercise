import React from 'react'
import style from './home.module.css'

export default function Home() {
  return (
 <>
 <header className={style.header}>
<div className="inner my-4 text-center">
  <img src="img/avataaars.svg" className='w-50 mb-2' alt="" />
  <h1 className='mb-3' style={{color:"#fff",fontSize:'55px',fontWeight:"700",letterSpacing:'2px'}}>START REACT</h1>
<div className={style.icon}>
<div className={style.line}></div>
  <i class="fa-solid fa-star text-white fa-2xl mb-5 mx-3"></i>
  <div className={style.line}></div>
</div>
  <h3 className={style.col}>
Graphic Artist - Web Designer - Illustrator
</h3>

</div>
 

    
    
    


 </header>
 
 
 
 
 </>
  )
}
