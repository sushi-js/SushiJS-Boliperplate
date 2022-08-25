import Link from 'next/link'
import React from 'react'

export default function Bento() {
  return (
    <div className='relative bg-white dark:bg-black pt-16 px-4 sm:px-6 lg:pt-12 lg:px-8'>
      <div className='bg-white dark:bg-black h-1/3 sm:h-2/3' />
      <div className='relative max-w-7xl mx-auto'>
        <div className='py-8 text-center'>
          <h2 className='py-0 text-3xl tracking-tight font-extrabold sm:text-4xl dark:text-white'>
          Inscríbete
          </h2>
        <div className="py-8" >
          <button className='bg-white hover:bg-gray-100 dark:bg-gray-800 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow-md'>
            <Link href='/Contacto'>
              <a className='hover:text-primary transition-all cursor-pointer'>
                Ir a Contacto
              </a>
            </Link>
          </button>
        </div>
    
        </div>
      </div>
    </div>
  )
}
