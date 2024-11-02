import React from 'react'
import Link from 'next/link'

const Service = () => {
  return (
    <div>
      <h1>now you are at our services  page</h1>
      <p>we will be offering a variety of services soon !</p>


      <ul>

        <li><Link href="/service/webdev"> Web Development
         page</Link></li>

         <li><Link  href="/service/appdev">App Development
         page</Link></li>


      </ul>

    </div>
  )
}

export default Service
