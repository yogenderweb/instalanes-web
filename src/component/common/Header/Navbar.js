"use client";
import React, { useState } from "react";
import styles from "./header.module.scss";
import { Button, Container, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
   
    <div className={styles.navber}>
        <div className={styles.logocard}>
            <Typography variant="h5" sx={{ fontSize: '24px', color: '#333', display: 'flex', gap: '3px',}}>
                <Image src="/images/logo.svg" width={30} height={30} alt="Logo"  
               />  
              Instalanes
            </Typography>
         </div>  

        <div className={styles.navItem}>
            <nav className={styles.navbar}>
                <button
                    className={styles.togglebtn}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <MenuIcon />
                </button>

                <ul
                    className={`${styles.navlist} ${menuOpen ? styles.active : ""}`}
                >
                    <li>
                    <Link className={styles.navlink} href="#">
                        TMS Solutions
                    </Link>
                    </li>
                    <li>
                    <Link className={styles.navlink} href="#">
                        Resources <KeyboardArrowDownIcon />
                    </Link>
                    <ul className={styles.submenu}>
                        <li>
                        <Link className={styles.sublink} href="#">
                            About
                        </Link>
                        </li>
                        <li>
                        <Link className={styles.sublink} href="#">
                            Blog
                        </Link>
                        </li>
                        <li>
                        <Link className={styles.sublink} href="#">
                            Partner
                        </Link>
                        </li>
                    </ul>
                    </li>
                    <li>
                    <Link className={styles.navlink} href="#">
                        Pricing
                    </Link>
                    </li>
                    <li>
                    <Link className={styles.navlink} href="#">
                        Contact us
                    </Link>
                    </li>
                </ul>
                </nav>
        </div>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#2a2a2aff',
            '&:hover': {
              backgroundColor: '#0982ecff',
            },
            padding: '9px 20px',
            display: { xs: "none", md: "inline-flex" },
          }}
        >
         Get Demo
        </Button>
         
    </div>
    
  )
}

export default Navbar;