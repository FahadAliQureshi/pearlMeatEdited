import React,{useState,useEffect} from 'react'
import styles from '../styles/Home.module.css'
import Image from "next/image";
import doctor from '../public/butcher.png'
import { useRouter } from 'next/router';
import Modal from './Modal'

function Contact() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [response, setResponse] = useState("");
  const [stem,setStem ] = useState(false)
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        message: "",
        phone:"",
        subject:""
      });
useEffect(() => {

}, [response])

  
      const handleChange = (e) => {
        setStem(true)
        setInputs({
          ...inputs,
          [e.target.name]: e.target.value,
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
      setResponse("")
        if (inputs.name == "" || inputs.email == "" || inputs.phone == "" ) {
            console.log("gee",inputs.email)
          setShow(true);
          setResponse("Please Fill In All Required Fields! ' * '  ");
          setTimeout(function () {
            setShow(false);
          }, 3000);
  return;
} if(!inputs.email.match(validRegex)){
   console.log("safewgwe",response)
   
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
}
        
        
        else {
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(inputs),
          };
    
          fetch("https://globaltechnologia.org/webAdmin/api/meet_shop_contact", requestOptions)
            .then((response) => {return response.json()})
            .then((res) => {
              console.log(res);
            
              setResponse(prevState => prevState ="your mail is successfully sent");
              
  
              // console.log(res.message);
          
            });
            if(inputs.email.match(validRegex)){
            setResponse("your mail is successfully sent");}
          setShow(true);
          setTimeout(function () {
            setShow(false);
          }, 3000);
          setInputs({
            name: "",
            email: "",
            message: "",
            phone:"",
            subject:""
          })
        }
      };
  return (
    <>
    <div className={styles.background} id="contact">
    <div className={styles.contact} id='contact'>
      
        <div className={styles.sep}>
            <div className={styles.left}>
                <figure className={styles.figure}>
                <Image
                    src={doctor}
                    alt="apple"
                    layout="fill"
                    objectFit="contain"
                        />
                </figure>
            </div>
            <div className={styles.right}>
            <form className={styles.form}>
            <h2 className={styles.h2}>Diversify with us.<br></br>Get in touch Today!</h2>
        <p className={styles.p}></p>
                     <div className={styles.crow}>
                    <div className={styles.simart}>
                      <span className={styles.required}>
                        *
                      </span>
                       <input
                        type='text'
                        name='name'
                        id='name'
                        className={styles.input}
                        placeholder='Name'
                        value={inputs.name}
                        onChange={handleChange}
                      />
                    </div>  
                    <div className={styles.simart}>
                    <span className={styles.required}>
                        *
                      </span>
                        <input
                        type='text'
                        name='email'
                        id='email'
                        className={styles.input}
                        placeholder='Email'
                        value={inputs.email}
                        onChange={handleChange}
                      />
                    </div>
                     
                     </div>
                    <div className={styles.crow}>
                      
                      <div className={styles.simart}>
                      <span className={styles.required}>
                        *
                      </span>
                      <input
                        type='text'
                        name='phone'
                        id='phone'
                        placeholder='Phone Number'
                        className={styles.input}
                        value={inputs.phone} 
                        onChange={handleChange}
                      />
                      </div>
                      <div className={styles.simart}>
                      <input
                        type='text'
                        name='subject'
                        id='subject'
                        placeholder='Subject'
                        className={styles.input}
                        value={inputs.subject}
                        onChange={handleChange}
                      />
                      </div>
                        
                    </div>
                    <textarea
                      type='text'
                      name='message'
                      id='message'
                      placeholder='Message'
                      className={styles.message}
                      value={inputs.message}
                      onChange={handleChange}
                    />
                     <button className={styles.button}  onClick={handleSubmit}>Send Message</button>
                  </form>
                 
            </div>
        </div>
        </div>
    </div>
    
    {show == true && <Modal message={response} setShow={setShow}/>}
</>)
}

export default Contact