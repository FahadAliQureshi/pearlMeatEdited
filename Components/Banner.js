import React from 'react';
import styles from './../styles/Home.module.css';
import Image from 'next/image';
import pc from '../public/pc.png'
import csd from '../public/csd.png'
import mar from '../public/m.png'
import veal from '../public/veal.png'
import lamb from '../public/lamb.png'
import goat from '../public/goat.png'
import poultry from '../public/poutlry.png'

function Banner() {
  return (
    <>
       
        <div style={{display:"flex",flexDirection:"column",width:"100%",alignItems:"center"}}>

            <div className={styles.banner}>
                <div className={styles.wrapper}>
                    <h2 className={styles.h2}>Pakistan’s Number 1 Meat Supplier!</h2>
                    <p>Quality is our core competence and our tradition makes us rich in experience!</p>
                    <p>Satisfying the tastebuds of our meat consumer everyday.</p>
                    <div className={styles.brand}>
                        <figure className={styles.img}>
                            <Image 
                            src={pc}
                            alt="logo"
                            layout="fill"
                            objectFit="contain"
                        /> 
                        </figure>
                        <figure className={styles.img}>
                            <Image 
                            src={mar}
                            alt="logo"
                            layout="fill"
                            objectFit="contain"
                        /> 
                        </figure>
                        <figure className={styles.img}>
                            <Image 
                            src={csd}
                            alt="logo"
                            layout="fill"
                            objectFit="contain"
                        /> 
                        </figure>
                    </div>
                </div>
            </div>

            <div className={styles.bannerbottom}>
                <div className={styles.wrapper}>
                    <div className={styles.toprow}>
                        <h5 className={styles.h5}>Explore the range</h5>
                        <div className={styles.line}></div>
                    </div>
                    <div className={styles.boxrow}>
                        <div className={styles.card}>
                        <figure className={styles.figure}>
                            <Image 
                                src={veal}
                                alt="logo"
                                layout="fill"
                                objectFit="contain"
                            /> 
                        </figure>
                        <p>Veal</p>
                        </div>
                        <div className={styles.card}>
                        <figure className={styles.figure}>
                            <Image 
                                src={poultry}
                                alt="logo"
                                layout="fill"
                                objectFit="contain"
                            /> 
                        </figure>
                        <p>Poultry</p>
                        </div> 
                        <div className={styles.card}>
                        <figure className={styles.figure}>
                            <Image 
                                src={goat}
                                alt="logo"
                                layout="fill"
                                objectFit="contain"
                            /> 
                        </figure>
                        <p>Goat</p>
                        </div>                       
                         <div className={styles.card}>
                        <figure className={styles.figure}>
                            <Image 
                                src={lamb}
                                alt="logo"
                                layout="fill"
                                objectFit="contain"
                            /> 
                        </figure>
                        <p>Lamb</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner