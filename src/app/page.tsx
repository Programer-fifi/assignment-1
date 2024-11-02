import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div>   
      <h1>
         Home Page
      </h1>

      <ul>
       <li><Link href="/">Home</Link></li>
       <li><Link href="/about">About</Link></li>
       <li><Link href="/contact">Contact</Link></li>
       <li><Link href="/service">Service</Link></li>

       </ul>

    </div>
  )
}

export default HomePage
//div is a container that holds all the other elements 