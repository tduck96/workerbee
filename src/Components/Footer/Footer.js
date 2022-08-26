import React from 'react'
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className = {styles.container}>
   <p> Workerbee, 2022. All rights reserved.</p>

   <section className = {styles.linkContainer}>
   <a href = 'www.instagram.com' className = {styles.link}>Instagram</a>
   <a href = 'www.facebook.com' className = {styles.link}>Facebook</a>
   <a href = 'www.twitter.com' className = {styles.link}>Twitter</a>
   </section>
    </div>
);
};
  


export default Footer
