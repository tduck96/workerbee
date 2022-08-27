import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Users.module.css'

const Users = () => {
  return (
    <div>
      <section className = {styles.linkContainer}>
        <Link to = '/' className = {styles.filterLinks}>Designers</Link>
        <Link to = '/' className = {styles.filterLinks}>Home Improvement</Link>
        <Link to = '/' className = {styles.filterLinks}>Photographers</Link>
        <Link to = '/' className = {styles.filterLinks}>Videographers</Link>
        <Link to = '/' className = {styles.filterLinks}>Web Developers</Link>
        <Link to = '/' className = {styles.filterLinks}>Musicians</Link>
      </section>
    </div>
  )
}

export default Users
