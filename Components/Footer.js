import React from 'react'
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import logo from '../public/logo.png';
import {HiChevronDoubleRight} from 'react-icons/hi'
import {CiShop} from 'react-icons/ci'
// import arrow from '../public/arrow.png';
import Link from 'next/link'


function Footer() {
  return (
    <>
       <div className={styles.footer} id="footer">
        <div className={styles.wrapper}>
 <div className={styles.foots}>
 <div className={styles.foot1}>
                <figure className={styles.figure}>
                <Image priority src={logo} alt="banner" layout="fill"  objectFit="contain"/>
                </figure>
                <div className={styles.bod}>
                <div className={styles.list}>
                  <span className={styles.icon}><CiShop/></span><p className={styles.p}>CSD Mega Mall Rawalpindi.</p>                    
                </div> 
                <div className={styles.list}>
                <span className={styles.icon}><CiShop/></span><p className={styles.p}>CSD Mall Westridge Rawalpindi.</p>                    
                </div>                 
                </div>
                {/* <p className={styles.p} style={{maxWidth:"420px"}}>
                Pearl meat is one of the best quality meat providers in Pakistan. It is a brand of MHM foods and Beverages. Products include fresh Goat meat, fresh Beef meat, poultry, special meat, frozen mutton parts, veal parts and beef parts. 
                </p> */}
            </div>

            <div className={styles.foote}>
                <div className={styles.foot3}>
                    <ul className={styles.ul}>
                        <li className={styles.li}><h3 className={styles.h3}>COMPANY LINKS</h3><div className={styles.line}></div>            </li>
                        
                 <Link href="/"><li className={styles.li}><p className={styles.p}><HiChevronDoubleRight/>Home</p>      </li></Link>
                 <Link href="/#products"><li className={styles.li}><p className={styles.p}><HiChevronDoubleRight/>Products</p></li></Link>
                 <Link href="/#whypearlmeat"><li className={styles.li}><p className={styles.p}><HiChevronDoubleRight/>Why Prealmeat</p>        </li></Link>
                 <Link href="/#footer"><li className={styles.li}><p className={styles.p}><HiChevronDoubleRight/>About Us</p>            </li></Link>
                 <Link href="/contact"><li className={styles.li}><p className={styles.p}><HiChevronDoubleRight/>Contact Us</p>        </li></Link>
                    </ul>
                </div>
                <div className={styles.foot2}>
                <ul className={styles.ul}>
                     <li className={styles.lis}><h3 className={styles.h3}>Support</h3><div className={styles.lines}></div></li>
                    
                    <li className={styles.li}><h5 className={styles.p}>Head office:</h5> <p className={styles.info}>F-11/1, Major Road opposite PTCL Exchange
office, Islamabad.</p></li>
                    <li className={styles.li}><h5 className={styles.p}>Regional: <br></br> office:</h5> <p className={styles.info}>84/B Main Iqbal Road Peshawer Road
Rawalpindi.</p></li>
                    <li className={styles.li}><h5 className={styles.p}>UAN No:</h5> <p className={styles.info}>0330 222 9 222</p></li>
                    <li className={styles.li}><h5 className={styles.p}>Email:</h5><p className={styles.info}>contact@pearlmeat.com</p></li>
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
       </div>
    </>
  )
}

export default Footer