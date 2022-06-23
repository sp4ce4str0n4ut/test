import React from 'react';
import styles from './Header.module.scss';

import logo from '../../assets/icons/logo.svg';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.header_wrap}>
                <div className={styles.logo}>
                    <img src={logo} alt="logo"/>
                    <p>Agency</p>
                </div>
                <button className={styles.header_btn}>About</button>
                <button className={styles.header_btn}>Services</button>
                <button className={styles.header_btn}>Pricing</button>
                <button className={styles.header_btn}>Blog</button>
                <button className={styles.btn}>CONTACT</button>
            </div>
            <div className={styles.header_info}>
                <p className={styles.header_info_heading}>Portfolio</p>
                <p className={styles.header_info_text}>Agency provides a full service range including technical skills, design, business understanding.</p>
            </div>
        </div>
    );
}

export default Header;
