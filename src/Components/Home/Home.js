import React from 'react'
import { Link }from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className = {styles.container}>

      <section className = {styles.headerSection}>
        <div className = {styles.wordContainer}>
           <h1> Meetup and connect with contractors and freelancers near you.</h1>
           <h3> A community of freelancers, passionate about providing you with the exact service you need, when you need it. </h3>
           <Link to ='/register' className = {styles.getStarted}>Get Started</Link>
        </div>
      </section>

        <section className = {styles.userActionContainer}>
          <h1 className = {styles.ViewAllHeadline}> Find Freelancers near you</h1>
          <Link to ='/users' className = {styles.viewAllButton}>View All</Link>
        </section>


    </div>
  )
}

export default Home
