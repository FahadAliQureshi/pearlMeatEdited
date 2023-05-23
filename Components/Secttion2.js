import React from 'react'
import styles from './../styles/Home.module.css';
import Image from 'next/image'
import meat from '../public/meat.png'
import meat2 from '../public/meant2.png'
import meat3 from '../public/meat3.png'


function Secttion2() {
  return (
    <>
    <div className={styles.section2} id="products">
        {/* <div style={{width:"100%",position:"relative"}}>
  <figure className={styles.figu}>
            <Image 
                src={ban}
                alt="logo"
                // layout={"cover"}
                width={"100%"}
                objectFit="cover"
            /> 
        </figure>
        </div> */}
      
        <div className={styles.wrapper}>
             <div className={styles.des}>
                <h3 className={styles.h3}>OUR PREMIUM <br></br>CUTS!</h3>
                <div className={styles.line}></div>
                <p>Our products guarantee a real treat. Around the clock, our employees are dedictated to provide this experience.</p>
             </div>
             <div className={styles.imgsec}>
                <div className={styles.carding}>
                    <figure className={styles.figure}>
                    <Image
                            src={meat}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                    </figure>
                    <div className={styles.description}>
                        <h4 className={styles.h4}>Undercut Steak</h4>
                        <p>Experience the taste of premium 
                        quality beef for perfect and 
                        delicious steaks.</p>
                    </div>
                </div>
                <div className={styles.carding}>
                    <figure className={styles.figure}>
                    <Image
                            src={meat2}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                    </figure>
                    <div className={styles.description}>
                        <h4 className={styles.h4}>Lamb Leg</h4>
                        <p>Premium quality lamb leg to 
ensure the highest standards of 
excellence</p>
                    </div>
                </div>
                <div className={styles.carding}>
                    <figure className={styles.figure}>
                    <Image
                            src={meat3}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                    </figure>
                    <div className={styles.description}>
                        <h4 className={styles.h4}>Drum Sticks</h4>
                        <p>Easy to cook, high in protein and 
best quality in affordable rates
for you.</p>
                    </div>
                </div>
             </div>
        </div>
    </div>
    </>
  )
}

export default Secttion2