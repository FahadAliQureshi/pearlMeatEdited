import React from "react";
import styles from "./../styles/Home.module.css";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
import has from "../public/hos.png";
import has2 from "../public/hos2.png";


function HeaderPage2() {
  return (
    <>
      <header className={(styles.header, styles.header2 )}>
        <div className={styles.boxer}>
          <Link href="/">
            <figure className={styles.logo2}>
              <Image src={logo} alt="logo" layout="fill" objectFit="contain" />
            </figure>
          </Link>
          <Link href="/">
            <button style={{ marginRight: "0px" }} className={styles.connect}>
              Go Back
            </button>
          </Link>
        </div>
 
      </header>
    </>
  );
}

export default HeaderPage2;
