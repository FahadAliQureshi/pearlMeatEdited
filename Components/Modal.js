import React from "react";
import styles from '../styles/Home.module.css'

function Modal({message , setShow}) {
  return (
    <> 
    {/* {message !== "" ? */}
    <div className={styles.overlays} onClick={()=>{setShow(false)}}>
      <div className={styles.modals}>{message}</div>
    </div>
    {/* // :""} */}
    </>
  
  );
}

export default Modal;