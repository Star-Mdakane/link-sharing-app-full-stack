'use client'

import { PLATFORMS } from '@/lib/helpers'
import React, { useState } from 'react'
import { FaLink } from 'react-icons/fa'
import { HiChevronDown, HiOutlineEquals } from 'react-icons/hi2'

const LinksForm = () => {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState(PLATFORMS[0])

    const Icon = selected.icon
    return (
        <div className='w-full h-auto rounded-t-xl flex flex-col gap-6 overflow-y-auto scrollbar-none'>
            <div className="rounded-xl bg-light flex flex-col gap-4 p-4 md:p-6">
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2 text-text t text-[16px] font-bold'>
                        <HiOutlineEquals />
                        <span>Link #1</span>
                    </div>
                    <p className='text-text t text-[16px]'>Remove</p>
                </div>
                <div className='flex flex-col'>
                    {/* Platgforms */}
                    <div>
                        <label htmlFor="platform">Platform</label>
                        <div className={`w-full relative`}>
                            <button type="button"
                                onClick={() => setOpen(prev => !prev)}
                                className={`w-full h-14 p-4 flex items-center justify-between rounded-lg border  ${open ? 'shadow-main' : ''} ${open ? 'border-pri' : 'border-border'}`}>
                                <span className='flex items-center text-text-sec gap-4 peer'>
                                    <Icon className="w-4 h-4 " />
                                    <span className='t text-[16px]'>
                                        {selected.name}
                                    </span>
                                </span>
                                <HiChevronDown className={`pointer-events-none text-pri font-bold w-5 h-5 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                            </button>

                            {open && (
                                <div className={`absolute z-10 mt-2 w-full rounded-lg border border-border bg-white shadow-lg overflow-y-auto scrollbar-none max-h-36 `}>
                                    {PLATFORMS.map(platform => {
                                        const PlatformIcon = platform.icon

                                        return (
                                            <button
                                                key={platform.value}
                                                type="button"
                                                onClick={() => {
                                                    setSelected(platform)
                                                    setOpen(false)
                                                }}
                                                className="w-full h-12 px-4 flex items-center gap-4 text-left hover:bg-gray-100"
                                            >
                                                <PlatformIcon className="w-4 h-4 text-text" />

                                                <span>
                                                    {platform.name}
                                                </span>
                                            </button>
                                        )
                                    })}
                                </div>
                            )}

                        </div>
                    </div>
                    {/* Link */}
                    <div>
                        <label htmlFor="link">
                            <span>Link</span>
                            <div className='w-fullmin-w-0 h-14 p-4 gap-4 flex items-center rounded-lg border-2 border-border text-text focus-within:shadow-main focus-within:border-pri'>
                                <FaLink className='w-4 h-4' />
                                <input type="url" name="" id="" className=" focus-within:outline-none flex-1 min-w-0" />
                            </div>
                        </label>

                    </div>
                </div>

            </div>
            {/* duplicate */}
            <div className="rounded-xl bg-light flex flex-col gap-4 p-4 md:p-6">
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2 text-text t text-[16px] font-bold'>
                        <HiOutlineEquals />
                        <span>Link #1</span>
                    </div>
                    <p className='text-text t text-[16px]'>Remove</p>
                </div>
                <div className='flex flex-col'>
                    {/* Platgforms */}
                    <div>
                        <label htmlFor="platform">Platform</label>
                        <div className={`w-full relative`}>
                            <button type="button"
                                onClick={() => setOpen(prev => !prev)}
                                className={`w-full h-14 p-4 flex items-center justify-between rounded-lg border  ${open ? 'shadow-main' : ''} ${open ? 'border-pri' : 'border-border'}`}>
                                <span className='flex items-center text-text-sec gap-4 peer'>
                                    <Icon className="w-4 h-4 " />
                                    <span className='t text-[16px]'>
                                        {selected.name}
                                    </span>
                                </span>
                                <HiChevronDown className={`pointer-events-none text-pri font-bold w-5 h-5 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                            </button>

                            {open && (
                                <div className={`absolute z-10 mt-2 w-full rounded-lg border border-border bg-white shadow-lg overflow-y-auto scrollbar-none max-h-36 `}>
                                    {PLATFORMS.map(platform => {
                                        const PlatformIcon = platform.icon

                                        return (
                                            <button
                                                key={platform.value}
                                                type="button"
                                                onClick={() => {
                                                    setSelected(platform)
                                                    setOpen(false)
                                                }}
                                                className="w-full h-12 px-4 flex items-center gap-4 text-left hover:bg-gray-100"
                                            >
                                                <PlatformIcon className="w-4 h-4 text-text" />

                                                <span>
                                                    {platform.name}
                                                </span>
                                            </button>
                                        )
                                    })}
                                </div>
                            )}

                        </div>
                    </div>
                    {/* Link */}
                    <div>
                        <label htmlFor="link">
                            <span>Link</span>
                            <div className='w-fullmin-w-0 h-14 p-4 gap-4 flex items-center rounded-lg border-2 border-border text-text focus-within:shadow-main focus-within:border-pri'>
                                <FaLink className='w-4 h-4' />
                                <input type="url" name="" id="" className=" focus-within:outline-none flex-1 min-w-0" />
                            </div>
                        </label>

                    </div>
                </div>

            </div>
            <div className="rounded-xl bg-light flex flex-col gap-4 p-4 md:p-6">
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2 text-text t text-[16px] font-bold'>
                        <HiOutlineEquals />
                        <span>Link #1</span>
                    </div>
                    <p className='text-text t text-[16px]'>Remove</p>
                </div>
                <div className='flex flex-col'>
                    {/* Platgforms */}
                    <div>
                        <label htmlFor="platform">Platform</label>
                        <div className={`w-full relative`}>
                            <button type="button"
                                onClick={() => setOpen(prev => !prev)}
                                className={`w-full h-14 p-4 flex items-center justify-between rounded-lg border  ${open ? 'shadow-main' : ''} ${open ? 'border-pri' : 'border-border'}`}>
                                <span className='flex items-center text-text-sec gap-4 peer'>
                                    <Icon className="w-4 h-4 " />
                                    <span className='t text-[16px]'>
                                        {selected.name}
                                    </span>
                                </span>
                                <HiChevronDown className={`pointer-events-none text-pri font-bold w-5 h-5 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
                            </button>

                            {open && (
                                <div className={`absolute z-10 mt-2 w-full rounded-lg border border-border bg-white shadow-lg overflow-y-auto scrollbar-none max-h-36 `}>
                                    {PLATFORMS.map(platform => {
                                        const PlatformIcon = platform.icon

                                        return (
                                            <button
                                                key={platform.value}
                                                type="button"
                                                onClick={() => {
                                                    setSelected(platform)
                                                    setOpen(false)
                                                }}
                                                className="w-full h-12 px-4 flex items-center gap-4 text-left hover:bg-gray-100"
                                            >
                                                <PlatformIcon className="w-4 h-4 text-text" />

                                                <span>
                                                    {platform.name}
                                                </span>
                                            </button>
                                        )
                                    })}
                                </div>
                            )}

                        </div>
                    </div>
                    {/* Link */}
                    <div>
                        <label htmlFor="link">
                            <span>Link</span>
                            <div className='w-fullmin-w-0 h-14 p-4 gap-4 flex items-center rounded-lg border-2 border-border text-text focus-within:shadow-main focus-within:border-pri'>
                                <FaLink className='w-4 h-4' />
                                <input type="url" name="" id="" className=" focus-within:outline-none flex-1 min-w-0" />
                            </div>
                        </label>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default LinksForm