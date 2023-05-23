
 
 

// import React, { useState, useEffect } from "react";
// import styles from "../styles/Home.module.css";
// import Image from "next/image";
// import doctor from "../public/butcher.png";
// import { useRouter } from "next/router";
// import Modal from "../Components/Modal";
// import Banner from "../Components/Banner";
// import Banne from "../public/banner.png";

// // Footer imports
// import logo from "../public/logo.png";
// import { HiChevronDoubleRight } from "react-icons/hi";
// import { CiShop } from "react-icons/ci";
// // import arrow from '../public/arrow.png';
// import Link from "next/link";
// import Header from "../Components/Header";

// function ContactQurbaniNew() {
//   const router = useRouter();
//   const [show, setShow] = useState(false);
//   var validRegex =
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//   const [response, setResponse] = useState("");
//   const [stem, setStem] = useState(false);
//   const [inputs, setInputs] = useState({
//     name: "",
//     email: "",
//     message: "",
//     phone: "",
//     subject: "",
//   });
//   useEffect(() => {}, [response]);

//   const handleChange = (e) => {
//     setStem(true);
//     setInputs({
//       ...inputs,
//       [e.target.name]: e.target.value,
//     });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setResponse("");
//     if (inputs.name == "" || inputs.email == "" || inputs.phone == "") {
//       console.log("gee", inputs.email);
//       setShow(true);
//       setResponse("Please Fill In All Required Fields! ' * '  ");
//       setTimeout(function () {
//         setShow(false);
//       }, 3000);
//       return;
//     }
//     if (!inputs.email.match(validRegex)) {
//       console.log("safewgwe", response);

//       // setTimeout(function () {
//       setShow(true);
//       // }, 2000);
//       // setShow(true);
//       setResponse("Enter Valid Email");
//       // setResponse("Please Fill In All Required Fields! ' * '  ");
//       // setResponse("Enter Valid Email");
//       setTimeout(function () {
//         setShow(false);
//       }, 3000);
//     } else {
//       const requestOptions = {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(inputs),
//       };

//       fetch(
//         "https://globaltechnologia.org/webAdmin/api/meet_shop_contact",
//         requestOptions
//       )
//         .then((response) => {
//           return response.json();
//         })
//         .then((res) => {
//           console.log(res);

//           setResponse(
//             (prevState) => (prevState = "your mail is successfully sent")
//           );

//           // console.log(res.message);
//         });
//       if (inputs.email.match(validRegex)) {
//         setResponse("your mail is successfully sent");
//       }
//       setShow(true);
//       setTimeout(function () {
//         setShow(false);
//       }, 3000);
//       setInputs({
//         name: "",
//         email: "",
//         address: "",
//         phone: "",
//         whatsapp: "",
//       });
//     }
//   };
//   return (
//     <>
//       <div className={styles.bannerQurbani} style={{ backgroundImage: `url(${Banne})` }}>
//         <Header />
//         <div className={styles.wrapperQurbani}>
//           <div className={styles.qurbaniAbout}>
//             <h2
//               className={styles.h2}
//               style={{ background: "none", color: "black", fontSize: "20px" }}
//             >
//               Our exceptional Qurbani services offer unparalleled convenience
//               and peace of mind. With a vast network of trusted partners, we
//               guarantee premium, healthy livestock sourced ethically. Enjoy
//               hassle-free bookings, on-site slaughter by certified
//               professionals, hygienic meat packaging, and prompt doorstep
//               delivery. Embrace a seamless Qurbani experience with us.
//             </h2>
//           </div>
//         </div>

//         <div
//           className={styles.background}
//           style={{ background: "none", color: "black" }}
//           id="contactQurbani"
//         >
//           <div
//             className={styles.contact}
//             style={{ background: "none", color: "black" }}
//             id="contactQurbani"
//           >
//             <div className={styles.sep}>
//               {/* <div className={styles.left}>
//               <figure className={styles.figure}>
//                 <Image
//                   src={doctor}
//                   alt="apple"
//                   layout="fill"
//                   objectFit="contain"
//                 />
//               </figure>
//             </div> */}
//               <div
//                 className={styles.right}
//                 style={{
//                   background: "white",
//                   color: "black",
//                   paddingTop: "0px",
//                 }}
//               >
//                 <form
//                   className={styles.form}
//                   style={{ background: "none", color: "black" }}
//                 >
//                   <h2
//                     className={styles.h2}
//                     style={{ background: "none", color: "black" }}
//                   >
//                     Your Qurbani
//                   </h2>
//                   <p className={styles.p}></p>
//                   <div
//                     className={styles.crow}
//                     style={{ background: "white", color: "black" }}
//                   >
//                     <div className={styles.simart}>
//                       <span className={styles.required}>*</span>
//                       <input
//                         type="text"
//                         name="name"
//                         id="name"
//                         className={styles.input}
//                         style={{ background: "white", color: "black" }}
//                         placeholder="Name"
//                         value={inputs.name}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div className={styles.simart}>
//                       <span className={styles.required}>*</span>
//                       <input
//                         type="text"
//                         name="email"
//                         id="email"
//                         className={styles.input}
//                         style={{ background: "white", color: "black" }}
//                         placeholder="Email"
//                         value={inputs.email}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>
//                   <div className={styles.crow}>
//                     <div className={styles.simart}>
//                       <span className={styles.required}>*</span>
//                       <input
//                         type="text"
//                         name="phone"
//                         id="phone"
//                         placeholder="Phone Number"
//                         className={styles.input}
//                         style={{ background: "white", color: "black" }}
//                         value={inputs.phone}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div className={styles.simart}>
//                       <input
//                         type="text"
//                         name="subject"
//                         id="subject"
//                         placeholder="Subject"
//                         className={styles.input}
//                         style={{ background: "white", color: "black" }}
//                         value={inputs.subject}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>
//                   <textarea
//                     type="text"
//                     name="message"
//                     id="message"
//                     placeholder="Message"
//                     className={styles.message}
//                     style={{ background: "white", color: "black" }}
//                     value={inputs.message}
//                     onChange={handleChange}
//                   />

//                   {/* additional */}
//                   <h2
//                     className={styles.h2}
//                     style={{ background: "white", color: "black" }}
//                   >
//                     Personal details
//                   </h2>
//                   <p className={styles.p}></p>
//                   <div
//                     className={styles.crow}
//                     style={{ background: "white", color: "black" }}
//                   >
//                     <div className={styles.simart}>
//                       <span className={styles.required}>*</span>
//                       <input
//                         type="text"
//                         name="name"
//                         id="name"
//                         className={styles.input}
//                         style={{ background: "white", color: "black" }}
//                         placeholder="Name"
//                         value={inputs.name}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div className={styles.simart}>
//                       <span className={styles.required}>*</span>
//                       <input
//                         type="text"
//                         name="email"
//                         id="email"
//                         className={styles.input}
//                         style={{ background: "white", color: "black" }}
//                         placeholder="Email"
//                         value={inputs.email}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>
//                   <div className={styles.crow}>
//                     <div className={styles.simart}>
//                       <span className={styles.required}>*</span>
//                       <input
//                         type="text"
//                         name="phone"
//                         id="phone"
//                         placeholder="Phone Number"
//                         className={styles.input}
//                         style={{ background: "white", color: "black" }}
//                         value={inputs.phone}
//                         onChange={handleChange}
//                       />
//                     </div>
//                     <div className={styles.simart}>
//                       <input
//                         type="text"
//                         name="subject"
//                         id="subject"
//                         placeholder="Whatsapp"
//                         className={styles.input}
//                         style={{ background: "white", color: "black" }}
//                         value={inputs.subject}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>
//                   <textarea
//                     type="text"
//                     name="message"
//                     id="message"
//                     placeholder="Address"
//                     className={styles.message}
//                     style={{ background: "white", color: "black" }}
//                     value={inputs.message}
//                     onChange={handleChange}
//                   />

//                   <button
//                     className={styles.button}
//                     style={{ background: "black", color: "white" }}
//                     onClick={handleSubmit}
//                   >
//                     Submit
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>

//         {show == true && <Modal message={response} setShow={setShow} />}

        {/* footer */}
        {/* <div className={styles.footer} id="footer">
        <div className={styles.wrapper}>
          <div className={styles.foots}>
            <div className={styles.foot1}>
              <figure className={styles.figure}>
                <Image
                  priority
                  src={logo}
                  alt="banner"
                  layout="fill"
                  objectFit="contain"
                />
              </figure>
              <div className={styles.bod}>
                <div className={styles.list}>
                  <span className={styles.icon}>
                    <CiShop />
                  </span>
                  <p className={styles.p}>CSD Mega Mall Rawalpindi.</p>
                </div>
                <div className={styles.list}>
                  <span className={styles.icon}>
                    <CiShop />
                  </span>
                  <p className={styles.p}>CSD Mall Westridge Rawalpindi.</p>
                </div>
              </div> */}
        {/* <p className={styles.p} style={{maxWidth:"420px"}}>
                Pearl meat is one of the best quality meat providers in Pakistan. It is a brand of MHM foods and Beverages. Products include fresh Goat meat, fresh Beef meat, poultry, special meat, frozen mutton parts, veal parts and beef parts. 
                </p> */}
        {/* </div>

            <div className={styles.foote}>
              <div className={styles.foot3}>
                <ul className={styles.ul}>
                  <li className={styles.li}>
                    <h3 className={styles.h3}>COMPANY LINKS</h3>
                    <div className={styles.line}></div>{" "}
                  </li>

                  <Link href="/">
                    <li className={styles.li}>
                      <p className={styles.p}>
                        <HiChevronDoubleRight />
                        Home
                      </p>{" "}
                    </li>
                  </Link>
                  <Link href="/#products">
                    <li className={styles.li}>
                      <p className={styles.p}>
                        <HiChevronDoubleRight />
                        Products
                      </p>
                    </li>
                  </Link>
                  <Link href="/#whypearlmeat">
                    <li className={styles.li}>
                      <p className={styles.p}>
                        <HiChevronDoubleRight />
                        Why Prealmeat
                      </p>{" "}
                    </li>
                  </Link>
                  <Link href="/#footer">
                    <li className={styles.li}>
                      <p className={styles.p}>
                        <HiChevronDoubleRight />
                        About Us
                      </p>{" "}
                    </li>
                  </Link>
                  <Link href="/contact">
                    <li className={styles.li}>
                      <p className={styles.p}>
                        <HiChevronDoubleRight />
                        Contact Us
                      </p>{" "}
                    </li>
                  </Link>
                </ul>
              </div>
              <div className={styles.foot2}>
                <ul className={styles.ul}>
                  <li className={styles.lis}>
                    <h3 className={styles.h3}>Support</h3>
                    <div className={styles.lines}></div>
                  </li>

                  <li className={styles.li}>
                    <h5 className={styles.p}>Head office:</h5>{" "}
                    <p className={styles.info}>
                      F-11/1, Major Road opposite PTCL Exchange office,
                      Islamabad.
                    </p>
                  </li>
                  <li className={styles.li}>
                    <h5 className={styles.p}>
                      Regional: <br></br> office:
                    </h5>{" "}
                    <p className={styles.info}>
                      84/B Main Iqbal Road Peshawer Road Rawalpindi.
                    </p>
                  </li>
                  <li className={styles.li}>
                    <h5 className={styles.p}>UAN No:</h5>{" "}
                    <p className={styles.info}>0330 222 9 222</p>
                  </li>
                  <li className={styles.li}>
                    <h5 className={styles.p}>Email:</h5>
                    <p className={styles.info}>contact@pearlmeat.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.wrappr}>
          <p className={styles.sac}>
            © 2022 — Meat Pearls. All Rights Reserved.
          </p>
        </div>
      </div> */}




//       </div>
//     </>
//   );
// }

// export default ContactQurbaniNew;


// components/BookingForm.js
import React, { useState } from 'react';
import styles from './QurbaniNew.module.css'
import Header from '../Components/Header';
import HeaderPage2 from '../Components/HeaderPage2';
import qurbaniImage from '../public/qurbaniPage2BG.jpg'
import Image from 'next/image';

const ContactQurbaniNew = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [deliveryDate, setdeliveryDate] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [animalOptions, setAnimalOptions] = useState([]);
  const [quantities, setQuantities] = useState({});
  const handleAnimalOptionChange = (e) => {
    const option = e.target.value;
    const updatedOptions = [...animalOptions];
    if (e.target.checked) {
      updatedOptions.push(option);
      setQuantities({ ...quantities, [option]: '' });
    } else {
      const index = updatedOptions.indexOf(option);
      if (index !== -1) {
        updatedOptions.splice(index, 1);
        const { [option]: removed, ...updatedQuantities } = quantities;
        setQuantities(updatedQuantities);
      }
    }
    setAnimalOptions(updatedOptions);
  };
  const handleQuantityChange = (e, option) => {
    const value = e.target.value;
    setQuantities({ ...quantities, [option]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = {
      name,
      email,
      deliveryDate,
      phoneNumber,
      animalOptions,
      quantities
    };
  console.log(formData)
    fetch('http://globaltechnologia.org/qrcodeNew/public/api/meat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        // Handle the response from the API
        // e.g., show success message, redirect, etc.
      })
      .catch(error => {
        // Handle errors that occur during the request
      });
  
    // Reset form fields
    setName('');
    setEmail('');
    setdeliveryDate('');
    setPhoneNumber('');
    setAnimalOptions([]);
    setQuantities({});
  };
  
  return (
    <>
    <div className={styles.Bimage}>
    <HeaderPage2 />
    <div className={styles.formpora}>
    <form className={styles.bookingForm} onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Phone Number:
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
              <label>
        Delivery Date
        <input type="date" value={deliveryDate} onChange={(e) => setdeliveryDate(e.target.value)} required
        />
      </label>
      </label>
      <p className={styles.optionsLabel}>Select Animals:</p>
      <label>
        <input
          type="checkbox"
          value="Cow"
          checked={animalOptions.includes('Cow')}
          onChange={handleAnimalOptionChange}
        />
        Cow
        {animalOptions.includes('Cow') && (
          <input
            type="number"
            value={quantities['Cow']}
            onChange={(e) => handleQuantityChange(e, 'Cow')}
            placeholder="Quantity"
            className={styles.quantityInput}
          />
        )}
      </label>
      <label>
        <input
          type="checkbox"
          value="Goat"
          checked={animalOptions.includes('Goat')}
          onChange={handleAnimalOptionChange}
        />
        Goat
        {animalOptions.includes('Goat') && (
          <input
            type="number"
            value={quantities['Goat']}
            onChange={(e) => handleQuantityChange(e, 'Goat')}
            placeholder="Quantity"
            className={styles.quantityInput}
          />
        )}
      </label>
      <label>
        <input
          type="checkbox"
          value="Cow Hissa"
          checked={animalOptions.includes('Cow Hissa')}
          onChange={handleAnimalOptionChange}
        />
        Cow Hissa
        {animalOptions.includes('Cow Hissa') && (
          <input
            type="number"
            value={quantities['Cow Hissa']}
            onChange={(e) => handleQuantityChange(e, 'Cow Hissa')}
            placeholder="Quantity"
            className={styles.quantityInput}
          />
        )}
      </label>
      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
    </div>
    </div>
    </>
  );

};
export default ContactQurbaniNew;