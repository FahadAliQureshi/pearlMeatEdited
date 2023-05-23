import React from 'react'
import styles from '../styles/Home.module.css';
// import Image from "next/image";
import {GiPlainCircle} from 'react-icons/gi';
function Section3() {
  return (
    <div className={styles.section6}>
           {/* <figure className={styles.svg}>
                            <Image
                            src={svg}
                            alt="system"
                            layout="fill"
                            objectFit="contain"
                            />
                    </figure>  */}
        <div className={styles.wrapper}>
            <h2 className={styles.h2}>Beef that you would never forget! From our <br></br> 
Farm to your Fork</h2>
            {/* <h1 className={styles.h}>AWESOME FACTS</h1> */}
            <div className={styles.palet}>
            
                <div className={styles.bbox}>
                    <div className={styles.row}>
                        <p className={styles.cc}><GiPlainCircle/></p>
                        <h2 className={styles.h3}>
                        Fresh Meat
                        </h2>
                    </div>
                </div>
               
                <div className={styles.bbox}>
                    <div className={styles.row}>
                        <p className={styles.cc}><GiPlainCircle/></p>
                        <h2 className={styles.h3}>
                         Frozen Meat
                        </h2>                
                    </div>
                </div>

                <div className={styles.bbox}>
                    <div className={styles.row}>
                        <p className={styles.cc}><GiPlainCircle/></p>
                        <h2 className={styles.h3}>
                         Poultry
                        </h2>                
                    </div>
                </div>

                {/* <div className={styles.bbox}>
                    <div className={styles.row}>
                        <h2 className={styles.h2}>
                        984
                        </h2>
                        <p className={styles.cc}><GiPlainCircle/></p>
                    </div>
                    <h2 className={styles.h2}>
                    Employees
                    </h2>
                </div> */}
            
            </div>
        </div>            

    </div>
  )
}

export default Section3