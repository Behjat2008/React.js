import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4 rounded-2xl m-10'>User Name: <span className='font-bold uppercase '>{userid}</span></div>
  )
}

export default User