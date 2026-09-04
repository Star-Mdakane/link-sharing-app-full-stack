import ButtonContainer from '@/components/ButtonContainer/ButtonContainer'
import Header from '@/components/Header/Header'
import PreviewPanel from '@/components/PreviewPanel/PreviewPanel'
import Image from 'next/image'
import React from 'react'
import { FaPlus } from 'react-icons/fa'

const LinksPage = () => {
  return (
    <div className='w-93.75 md:w-screen max-w-360 h-screen flex flex-col gap-6 md:gap-0 md:px-6 pb-6 md:pb-0'>
      <Header />
      <div className='flex flex-1 w-93.75 md:w-full h-full md:rounded-xl md:mb-6 gap-6'>
        <PreviewPanel />
        <div className='md:w-full h-auto bg-white w-86 rounded-xl max-w-202 mx-auto lg:ml-auto lg:mx-0 flex flex-col overflow-hidden'>
          <div className='flex-1 h-auto flex flex-col p-6 md:p-10 gap-10'>
            <div>
              <h2 className='t text-[24px] md:text-[32px] text-text-sec font-semibold'>Customize your links</h2>
              <p className='t text-[16px] text-text'>Add/edit/remove links below and then share all your profiles with the world!</p>
            </div>
            <div className='flex flex-col gap-6'>
              <button className='flex rounded-lg border border-pri text-pri h-14 justify-center items-center'>
                <FaPlus className='w-2 h-2 font-normal' />
                <span className='t text-[16px] font-semibold'>{' '}Add new link</span>
              </button>
              <div className='p-4 rounded-xl flex flex-col bg-light gap-6 items-center'>
                <div className='relative w-31 h-20 md:w-62.5 md:h-40'>
                  <Image src="/images/illustration-empty.svg" fill alt="empty" className='absolute inset-0 w-full h-full object-cover' />
                </div>
                <p className='t text-[24px] md:text-[32px] text-text-sec font-semibold'>Let&apos;s get you started</p>
                <p className='t text-[16px] text-text text-center'>Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
              </div>
            </div>
          </div>
          <ButtonContainer />
        </div>
      </div>
    </div>
  )
}

export default LinksPage