import { Button } from '@nextui-org/button'
import Image from 'next/image'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
        <Image 
        src={'/404.svg'}
        alt='404'
        width={600}
        height={600}
        />
      <Button className='bg-slate-900'><Link href="/" className='text-white font-medium'>Return Home</Link></Button>
    </div>
  )
}