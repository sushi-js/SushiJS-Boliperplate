import React from 'react'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Sushisho() {
  return (
    <motion.nav
      className='drop-shadow-xl sticky max-w-6xl w-full bg-white-800 z-[1] filter-blur dark:bg-gray-800 top-2 md:top-4 px-4 py-2 rounded-md mx-auto flex justify-between items-center'
      animate={{ y: 25 }}
      transition={{ duration: 0.5 }}
    >
      <div className='flex flex-row gap-1 text-tertiary'>
        <Link href='/'>
          <a className='hover:text-primary transition-all cursor-pointer'>
            Inscríbete
          </a>
        </Link>
      </div>
      <div className='flex flex-row gap-1 text-tertiary'>
        <Link href='/'>
          <a className='hover:text-primary transition-all cursor-pointer'>
            Presupuesto
          </a>
        </Link>
      </div>
      <div className='flex flex-row gap-1 text-tertiary'>
        <Link href='/'>
          <a className='hover:text-primary transition-all cursor-pointer'>
            BCN HOSTESS
          </a>
        </Link>
      </div>
      <div className='flex flex-row gap-1 text-tertiary'>
        <Link href='/'>
          <a className='hover:text-primary transition-all cursor-pointer'>
            Conócenos
          </a>
        </Link>
      </div>
      <div className='flex flex-row gap-1 text-tertiary'>
        <Link href='/'>
          <a className='hover:text-primary transition-all cursor-pointer'>
            Contacto
          </a>
        </Link>
      </div>
    </motion.nav>
  )
}
