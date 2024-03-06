import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='h-full relative w-16 aspect-square'>
          <Image
            className="hidden md:block invert"
            src="/assets/images/logo.png"
            fill
            
          />
          <Image
            className="block md:hidden "
            src="/assets/images/logo.png"
            fill
          />
        </div>
  )
}

export default Logo