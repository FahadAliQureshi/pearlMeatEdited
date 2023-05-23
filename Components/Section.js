import React from 'react'
import styles from './../styles/Home.module.css';
import Image from 'next/image'
import b1 from '../public/b1.png'
import b2 from '../public/b2.png'
import b3 from '../public/b3.png'
import b4 from '../public/b4.png'
import b5 from '../public/b5.png'

function Section() {
  return (
    <>
            <div style={{display:"flex",flexDirection:"column",width:"100%",alignItems:"center",background:"white"}}>

    <div className={styles.section} id="whypearlmeat">
        <div className={styles.wrapper}>
             <h2 className={styles.h2}>Reasons to buy from Pearl Meat</h2>
             <p>Pearl meat is one of the best quality meat providers in Pakistan. It is a brand of MHM foods and Beverages. 
Products that Pearl Meat currently supplying in market include fresh Goat meat, fresh Beef meat, poultry, special meat, frozen mutton parts, veal parts and beef parts. </p>
        <div className={styles.boxes}>
            <div className={styles.cards}>
            <figure className={styles.box}>
                            <Image 
                                src={b1}
                                alt="logo"
                                layout="fill"
                                objectFit="cover"
                            /> 
                        </figure>
                <p>Hygiene</p>
            </div>
          <div className={styles.cards}>
                <figure className={styles.box}>
                <Image 
                    src={b2}
                    alt="logo"
                    layout="fill"
                    objectFit="contain"
                /> 
                </figure>
                <p>Temperature <br></br>
control vehicle</p>
            </div>
            <div className={styles.cards}>
                <figure className={styles.box}>
                <Image 
                    src={b3}
                    alt="logo"
                    layout="fill"
                    objectFit="contain"
                /> 
                </figure>
                <p>Bacteria <br></br>
free</p>
            </div>
            <div className={styles.cards}>
                <figure className={styles.box}>
                <Image 
                    src={b4}
                    alt="logo"
                    layout="fill"
                    objectFit="contain"
                /> 
                </figure>
                <p>Quality <br></br>
compliance</p>
            </div>
            <div className={styles.cards}>
                <figure className={styles.box}>
                <Image 
                    src={b5}
                    alt="logo"
                    layout="fill"
                    objectFit="contain"
                /> 
                </figure>
                <p>Medically 
<br></br>checked</p>
            </div> 
        </div>  </div>
      
    </div>
    </div></>
  )
}

export default Section