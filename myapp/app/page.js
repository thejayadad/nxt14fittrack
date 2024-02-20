import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div>HomePage
      <Link href={'/login'}>Login</Link>
    </div>
  )
}

export default HomePage