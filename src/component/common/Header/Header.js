"use client";
import React, { useEffect, useState } from "react";
import Navbar from './Navbar';
import {Container} from '@mui/material';
import styles from "./header.module.scss";

const Header = () => {
   const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <header className={`${styles.header} ${isFixed ? styles.fixed : ""}`}>
      <Container maxWidth="lg">
        <Navbar />
      </Container>
    </header> 
  )
}

export default Header;