import React from "react";
import styles from "./../styles/Home.module.css";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
import has from "../public/hos.png";
import has2 from "../public/hos2.png";
function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.boxer}>
          <Link href="/">
            <figure className={styles.logo}>
              <Image src={logo} alt="logo" layout="fill" objectFit="contain" />
            </figure>
          </Link>
          <Link href="/ContactQurbaniNew">
            <button style={{ marginRight: "0px" }} className={styles.connect}>
              E-Qurbani
            </button>
          </Link>
        </div>

        <div className={styles.boxer}>
          <a href="tel:03302229222">
            <button className={styles.uan}>UAN No: 0330 222 9 222</button>
          </a>
          <Link href="#contact">
            <button className={styles.connect}>Lets Connect</button>
          </Link>
        </div>

        <div className={styles.sigma}>
          <figure className={styles.sig}>
            <Image src={has2} alt="logo" layout="fill" objectFit="contain" />
          </figure>
          <figure className={styles.sig}>
            <Image src={has} alt="logo" layout="fill" objectFit="contain" />
          </figure>
        </div>
      </header>
    </>
  );
}

export default Header;
