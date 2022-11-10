import React from "react";
import { useEffect } from "react";
import style from "./Contact.module.css";
// import $ from 'jquery'

export default function Contact() {

  // function for show label
  function focusinput() {
    let btn = document.querySelectorAll("#btn");
    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener("input", function () {
      btn[i].previousElementSibling.classList.remove("opacity-0");
        forValidEmail();
        forMessage()
        
      });
    }
  }
  // function for sheck validation for email
  function forValidEmail() {
    let validemail = document.getElementById("valid");

    let btnemail = document.querySelector(".btn1");

    btnemail.addEventListener("input", function () {
      if (!validation(btnemail.value)) {
        validemail.classList.remove("d-none");
      } else {
        validemail.classList.add("d-none");
      }
    });
  }
  function validation(input) {
    let reg = /@/gm;
    if (reg.test(input)) {
      return true;
    } else {
      return false;
    }
  }
  // function for valid textarea
  function forMessage() {
    let validmessage = document.getElementById("valid2");
    let btnmessage = document.querySelector(".btn2");
    btnmessage.addEventListener("input", function () {
      if (validation2(btnmessage.value)) {
        validmessage.classList.remove("d-none");
      } else {
        validmessage.classList.add("d-none");
      }
    });
  }
  function validation2(input) {
    let reg = /[a-z]/gmi;
    if (!reg.test(input)) {
      return true;
    } else {
      return false;
    }
  }
  // for call function
  useEffect(() => {
    focusinput();
  }, []);
  return (
    <>
      <div className="container my-1 text-center">
        <h1 className="fw-bold mb-2" style={{ fontSize: "50px" }}>
          CONTACT
        </h1>
        {/* for icon star */}
        <div className={style.icon}>
          <div className={style.line}></div>
          <i class="fa-solid fa-star  fa-2xl mb-2 mx-3"></i>
          <div className={style.line}></div>
        </div>
        {/* for   form input  */}
        <div className="form mt-1 text-start m-auto" style={{ width: "800px" }}>
          <label
            className="mb-1 ms-1 text-info  position-relative opacity-0 "
            style={{ top: "0px" }}
          >
            Name
          </label>
          <input
            type="text"
            id="btn"
            placeholder="Name"
            className="form-control border border-0 border-bottom py-2"
          />
          <div className="email border border-0 border-bottom">
            <label className="mt-2 ms-1 text-info opacity-0 ">Email</label>
            <input
              type="text"
              id="btn"
              placeholder="Email"
              className=" btn1 form-control border border-0  py-2"
            />
            <ul>
              <li className="text-danger d-none" id="valid">
                Not a valid email address
              </li>
            </ul>
          </div>
          <label className="mt-1 ms-1 text-info opacity-0">Number</label>
          <input
            type="number"
            id="btn"
            placeholder="Number"
            className="form-control border border-0 border-bottom py-2"
          />
          <div className="texture border border-0 border-bottom ">
            <label className="mt-1 ms-1 text-info opacity-0">Message</label>

            <textarea
              id="btn"
              placeholder="Message"
              cols="10"
              rows="2"
              className=" btn2 form-control border border-0 py-2"
            ></textarea>
            <ul>
              <li className="text-danger d-none" id="valid2">Please enter a message.</li>
            </ul>
          </div>

          <button className="btn btn-info my-2 p-3 fs-4 rounded-4" onClick={()=> forMessage()}>Send</button>
        </div>
      </div>
    </>
  );
}
