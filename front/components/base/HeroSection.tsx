import React from 'react'
import Image from 'next/image'
import { Button } from "@heroui/button"
import { Link } from "@heroui/link"

const HeroSection = () => {
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <div>
                <Image
                    alt='Hero Image'
                    src='/banner_img.svg'
                    width={600}
                    height={600}
                />
            </div>
            <div className='text-center mt-4'>
                <h1 className='text-6xl md:text-7xl lg:text-9xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent'>Clash</h1>
                <p className='text-2xl md:text-3xl lg:text-4xl font-bold'>Discover the better choice, together</p>
                <Button variant='flat' className='mt-2 bg-slate-600 text-white font-medium'><Link href='/login' className='text-white'>Start Free</Link></Button>
            </div>
        </div>
    )
}

export default HeroSection