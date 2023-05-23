import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import doctor from "../public/butcher.png";
import { useRouter } from "next/router";
import Modal from "../Components/Modal";
import Banner from "../Components/Banner";
import Banne from "../public/banner.png";

// Footer imports
import logo from "../public/logo.png";
import { HiChevronDoubleRight } from "react-icons/hi";
import { CiShop } from "react-icons/ci";
// import arrow from '../public/arrow.png';
import Link from "next/link";
import Header from "../Components/Header";

function ContactQurbani() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [response, setResponse] = useState("");
  const [stem, setStem] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    subject: "",
  });
  useEffect(() => {}, [response]);

  const handleChange = (e) => {
    setStem(true);
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setResponse("");
    if (inputs.name == "" || inputs.email == "" || inputs.phone == "") {
      console.log("gee", inputs.email);
      setShow(true);
      setResponse("Please Fill In All Required Fields! ' * '  ");
      setTimeout(function () {
        setShow(false);
      }, 3000);
      return;
    }
    if (!inputs.email.match(validRegex)) {
      console.log("safewgwe", response);

      // setTimeout(function () {
      setShow(true);
      // }, 2000);
      // setShow(true);
      setResponse("Enter Valid Email");
      // setResponse("Please Fill In All Required Fields! ' * '  ");
      // setResponse("Enter Valid Email");
      setTimeout(function () {
        setShow(false);
      }, 3000);
    } else {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      };

      fetch(
        "https://globaltechnologia.org/webAdmin/api/meet_shop_contact",
        requestOptions
      )
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          console.log(res);

          setResponse(
            (prevState) => (prevState = "your mail is successfully sent")
          );

          // console.log(res.message);
        });
      if (inputs.email.match(validRegex)) {
        setResponse("your mail is successfully sent");
      }
      setShow(true);
      setTimeout(function () {
        setShow(false);
      }, 3000);
      setInputs({
        name: "",
        email: "",
        address: "",
        phone: "",
        whatsapp: "",
      });
    }
  };
  return (
    <>
      <div
        className={styles.bannerQurbani}
        // style={{ backgroundImage: `url(${Banne})` }}
        style={{height:"600px" }}

      >
        <Header />
      </div>

<div 
style={{display:"flex", flexDirection:"column", justifyContent:"center", alignContent:"center", textAlign:"center", alignItems:"center"}}
>
      <div style={{width: "70%"}}>
            <h2
              style={{ background: "none", color: "black", fontSize: "20px", marginTop:"150px" }}
            >
              Our exceptional Qurbani services offer unparalleled convenience
              and peace of mind. With a vast network of trusted partners, we
              guarantee premium, healthy livestock sourced ethically. Enjoy
              hassle-free bookings, on-site slaughter by certified
              professionals, hygienic meat packaging, and prompt doorstep
              delivery. Embrace a seamless Qurbani experience with us.
            </h2>
          </div>
      
<div style={{width: "50%"}}>
        <form style={{ display:"flex", flexDirection:"column"}}>
          <h2  style={{color: "black"}}>Your Qurbani</h2>

          <div
            style={{display:"flex"}}
   
          >
            <div >
              <input
                type="text"
                name="name"
                id="name"
                
          style={{borderRadius:"50px" }}
                placeholder="Name"
                value={inputs.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="email"
                id="email"
        style={{borderRadius:"50px" }}
                placeholder="Email"
                value={inputs.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div style={{display:"flex"}}>
            <div>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone Number"
        style={{borderRadius:"50px" }}
                value={inputs.phone}
                onChange={handleChange}
              />
            </div>
            <div >
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Whatsapp Number"
                // style={{ background: "white", color: "black" }}
                style={{borderRadius:"50px", padding:"10px 20px" }}
                value={inputs.subject}
                onChange={handleChange}
              />
            </div>
          </div>
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Address"
            // style={{ background: "white", color: "black" }}
            style={{borderRadius:"50px" }}
            value={inputs.message}
            onChange={handleChange}
          />

          {/* additional */}
          <h2 style={{color:"white"}}>Personal details</h2>
          {/* <p className={styles.p}></p> */}
          <div style={{display:"flex"}}>
            <div>
              
              <input
                type="text"
                name="name"
                id="name"
                // style={{ background: "white", color: "black" }}
                style={{borderRadius:"50px" }}
                placeholder="Name"
                value={inputs.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="email"
                id="email"
                // style={{ background: "white", color: "black" }}
                placeholder="Email"
                value={inputs.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div style={{display:"flex"}}>
            <div>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone Number"
  
                // style={{ background: "white", color: "black" }}
                value={inputs.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Whatsapp"
                // style={{ background: "white", color: "black" }}
                value={inputs.subject}
                onChange={handleChange}
              />
            </div>
          </div>
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Address"
            // style={{ background: "white", color: "black" }}
            value={inputs.message}
            onChange={handleChange}
          />

          <button
            // style={{ background: "black", color: "white" }}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
        </div>
        </div>
    </>
  );
}

export default ContactQurbani;
