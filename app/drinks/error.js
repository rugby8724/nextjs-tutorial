'use client'

import React from 'react'

const error = () => {
  console.log(error)
  return (
    //<div>there was an error...</div>
    <div>{error.error.message}</div>
  )
}

export default error