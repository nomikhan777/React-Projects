import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='py-5'>
    <div className="container">
      <div className="row">
        <div className="col text-center">

        <h1>Home of Dashboard</h1>
        <Link to="/" className='btn btn-info'>Home</Link>

        </div>
      </div>
    </div>
    </div>
  )
}
