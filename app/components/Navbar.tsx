import React from 'react'
import Link from 'next/link'

export default function Navbar () {
  return (
    <div className='flex gap-8 bg-lime-500 ' >
      <h1 className='font-bold'>RN</h1>
      <Link href="/">Home</Link>
     <Link href="/about">About</Link>
     <Link href="/news">News</Link>
     <Link href="/contact">Contact</Link>
     

    </div>
  )
}

