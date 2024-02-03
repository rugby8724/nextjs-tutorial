import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <h1 className='text-7xl'>HomePage</h1>
      <Link href='/about' className='text-2'>about page</Link>
      </div>
  )
}

export default HomePage