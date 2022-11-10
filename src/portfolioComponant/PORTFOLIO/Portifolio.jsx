import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from './portfolio.module.css'

export default function Portifolio() {
  // to hide page 2th
  function close2() {
    let imglight = document.getElementById('imglight')
    imglight.classList.add('d-none')
  }
  // to hide page 1
  function close() {
    let imglight = document.getElementById('imglight')
    let name = document.getElementById('name')
    let img = document.querySelectorAll('#img')
    let button = document.querySelectorAll('#button')
    let imguniqe = document.getElementById('imguniqe')
    for (let i = 0; i < img.length; i++) {
      button[i].addEventListener('click', function () {
        imglight.classList.remove('d-none')
        let newimg = img[i].getAttribute('src')
        // source for title to second page
        let source=newimg.slice(5,-4)
        name.innerHTML=`${source}`
        imguniqe.style.backgroundImage = `url(${newimg})`
      })
    }
  }

  let [images, setimages] = useState([])
  function getimg() {
    setimages([
      'img2/cabin.png',
      'img2/cake.png',
      'img2/circus.png',
      'img2/game.png',
      'img2/safe.png',
      'img2/submarine.png',
    ])
  }
  useEffect(() => {
    getimg()
    close()
  },[images] )

  return (
    <>
      <div className="container text-center my-5 py-5">
      {/* frist page */}
        <div className="content ">
          <h1 className="fw-bold mb-5 " style={{ fontSize: '50px' }}>
            PORTFOLIO
          </h1>
          <div className={style.icon}>
            <div className={style.line}></div>
            <i class="fa-solid fa-star  fa-2xl mb-5 mx-3"></i>
            <div className={style.line}></div>
          </div>
          <div className="row g-3 ">
            {images.map((img) => (
              <div className="col-md-4  ">
                <div className="inner position-relative">
                  <img src={img} alt="" className="w-100" id="img" />
                  <div className={style.img_hover}>
                    <i
                      className="fa-solid fa-plus  fa-6x text-white  fw-bold "
                      id="button"
                    ></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        id="imglight"
        className="d-none top-0 position-fixed bottom-0 w-100 d-flex justify-content-center align-items-center"
        style={{ background: 'rgba(0,0,0,.5)' }}
      >
        <div
          className="  bg-white d-flex flex-column justify-content-center align-items-center m-3 position-relative"
          style={{ width: '1000px', height: '600px' }}
        >
          <h1 id="name" style={{fontSize:'55px',fontWeight:'700'}}></h1>
          <div className={style.icon} style={{ margin: '10px' }}>
            <div className={style.line}></div>
            <i class="fa-solid fa-star  fa-2xl mb-5 mx-3"></i>
            <div className={style.line}></div>
          </div>

          <div id="imguniqe" className={style.imguniqe}></div>
          <p className="text-center w-75  m-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            ipsum. Nostrum, id quibusdam neque aut similique fugit quisquam
            cumque placeat?
          </p>
          <button
            className="d-flex bg-success p-2 border border-0 rounded-4 text-white my-2"
            onClick={() => close2()}
          >
            <i className="fa-solid fa-xmark fa-2x m-1 " />
            <p className="m-1 fs-5">close Window</p>
          </button>
          <i
            className="fa-solid fa-xmark   fa-5x position-absolute top-0"
            style={{ right: '10px' }}
            onClick={() => close2()}
          ></i>
        </div>
      </div>
    </>
  )
}
