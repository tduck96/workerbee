import React from 'react'
import { useParams } from 'react-router-dom';
import Users from './Users'

const UserbyCategory = () => {
let { category } = useParams();
console.log(category)
  return (
    <div>
      <Users />
    </div>
  )
}

export default UserbyCategory
