'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { BiLink } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineRemoveRedEye } from 'react-icons/md'

const Header = () => {
  const pathname = usePathname();

  return (
    <div className='w-93.75 mx-0 md:mx-auto md:w-full h-21 md:h-22 p-4 pl-6 md:p-6 bg-white flex justify-between items-center md:rounded-xl md:my-6'
    >
      <div className='items-center'>
        <Image
          className='hidden md:block'
          src={"/images/logo-devlinks-large.svg"}
          width={148}
          height={32}
          alt='logo large'
          loading='eager'
        />
        <Image
          className='md:hidden'
          src={"/images/logo-devlinks-small.svg"}
          width={32}
          height={32}
          alt='logo small'
        />
      </div>
      <div className='flex items-center justify-center gap-4'>
        <Link href="/" className={`${pathname === "/" ? 'bg-pri/20' : ''} ${pathname === "/" ? 'text-pri' : 'text-text'} hover:text-pri flex px-6 py-4 items-center justify-center gap-2 rounded-lg`}>
          <BiLink className='w-5 h-5' />
          <p className='hidden md:block t text-[16px]  font-semibold'>Links</p>
        </Link>
        <Link href="/profile" className={`${pathname === "/profile" ? 'bg-pri/20' : ''} ${pathname === "/profile" ? 'text-pri' : 'text-text'} hover:text-pri flex px-6 py-4 items-center justify-center gap-2 rounded-lg`}>
          <CgProfile className='w-5 h-5' />
          <p className='hidden md:block t text-[16px] font-semibold'>Profile</p>
        </Link>
      </div>

      <Link href="/preview" className={`grid place-content-center px-6 py-4 border border-pri rounded-lg hover:bg-pri/20`}>
        <MdOutlineRemoveRedEye className='w-5 h-5 text-pri md:hidden' />
        <p className='hidden md:block t text-[16px] font-semibold text-pri'>Preview</p>
      </Link>

    </div>
  )
}

export default Header