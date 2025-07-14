import { SimpleWidget } from '@/components/SimpleWidget'
import React from 'react'

function MainPage() {
  return (
    <div>
      <h1 className='mt-2 text-3xl'>Dashboard</h1>
      <span className='text-xl'>Informacion general</span>

    <div className='flex flex-wrap p-4'>
      <SimpleWidget />
    </div>

    </div>
  )
}

export default MainPage