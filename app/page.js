import Header from '@/components/Header/Header'
import PreviewPanel from '@/components/PreviewPanel/PreviewPanel'
import React from 'react'

const LinksPage = () => {
  return (
    <div className='w-93.75 md:w-screen max-w-360 h-screen flex flex-col gap-6 md:gap-0 md:px-6 pb-6 md:pb-0'>
      <Header />
      <div className='flex flex-1 w-93.75 md:w-full h-full md:rounded-xl md:mb-6 gap-6'>
        <PreviewPanel />
        <div className='md:w-full bg-white w-86 rounded-xl max-w-202 mx-auto lg:ml-auto lg:mx-0'>

        </div>
      </div>
    </div>
  )
}

export default LinksPage