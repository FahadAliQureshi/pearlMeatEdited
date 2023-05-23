import React from 'react'
import meating from '../public/meating.png'
import rows from '../public/rows.png'
import rowing from '../public/rowing.png'
import styles from './../styles/Home.module.css';
import Image from 'next/image'
function Section4() {
  return (
    <>
            <div style={{display:"flex",flexDirection:"column",width:"100%",alignItems:"center",background:"white"}}>

    <div className={styles.section3}>
       <div className={styles.wrapper}>
            <div className={styles.left}> 
                <Image
                    src={meating}
                    alt="system"
                    layout="fill"
                    objectFit="cover"
                    />
            </div>
            <div className={styles.right}>
                <h2 className={styles.h3}>Production Quality<br></br> Compliance</h2>
                <div className={styles.line}></div>
                <p>The quality of our product starts with the careful selection of animals. For the 
best compliance, we prefer slaughtering of our animals in the government 
slaughter houses.</p>
               <div className={styles.rowthing}>
                <figure className={styles.figure}>
                <Image
                    src={rows}
                    alt="system"
                    layout="fill"
                    objectFit="contain"
                    />
                </figure>
                <div className={styles.disp}>
                    <h5 className={styles.h5}>We care for your money</h5>
                    <p className={styles.p}>When you choose us, you will feel the benefit of multiple year’s experience in meat industry.  Our pride is in customer
statisfication.</p>
                </div>
               </div>
               <div className={styles.rowthing}>
                <figure className={styles.figure}>
                <Image
                    src={rowing}
                    alt="system"
                    layout="fill"
                    objectFit="contain"
                    />
                </figure>
                <div className={styles.disp}>
                    <h5 className={styles.h5}>We care for your health</h5>
                    <p className={styles.p}>We understand the importance of hygiene and cleanliness
from our cattle farms to our slaughterhouse and from our
slaughterhouse to our retail stores.</p>
                </div>
               </div>
            </div>
       </div>
    </div>
    </div>
    </>
  )
}

export default Section4