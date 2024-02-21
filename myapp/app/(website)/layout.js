import Header from '@/components/Header'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <Header />
        <div className='mx-auto max-w-screen-lg p-8'>
        {children}
        </div>
    </div>
  )
}

export default layout