import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Users.module.css'

const Users = () => {

  return (
    <div>
      <section className = {styles.linkContainer}>
        <Link to = '/users' className = {styles.filterLinks}>All</Link>
        <Link to = '/users/designs' className = {styles.filterLinks}>Designers</Link>
        <Link to = '/users/homeimprovement' className = {styles.filterLinks}>Home Improvement</Link>
        <Link to = '/users/photographers' className = {styles.filterLinks}>Photographers</Link>
        <Link to = '/users/videographers' className = {styles.filterLinks}>Videographers</Link>
        <Link to = '/users/webdevelopers' className = {styles.filterLinks}>Web Developers</Link>
        <Link to = '/users/musicians' className = {styles.filterLinks}>Musicians</Link>
      </section>
    </div>
  )
}

export default Users
