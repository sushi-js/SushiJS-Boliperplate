import React from 'react'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Sushiten() {
  return (
    <motion.nav
      className='drop-shadow-xl max-w-6xl w-full bg-white-800 z-[1] filter-blur dark:bg-gray-800 top-10 md:top-20 px-4 py-2 rounded-md mx-auto flex justify-between items-center'
      animate={{ y: 40 }}
      transition={{ duration: 0.5 }}
    >
      <div className='flex flex-row gap-1 text-tertiary'>
        <Link href='/'>
          <a className='hover:text-primary transition-all cursor-pointer'>
            In Store
          </a>
        </Link>
      </div>
      <div className='flex flex-row gap-1 text-tertiary'>
        <Link href='/'>
          <a className='hover:text-primary transition-all cursor-pointer'>
            Street Marketing
          </a>
        </Link>
      </div>
      <div className='flex flex-row gap-1 text-tertiary'>
        <Link href='/'>
          <a className='hover:text-primary transition-all cursor-pointer'>
            Ferias y Congresos
          </a>
        </Link>
      </div>
      <div className='flex flex-row gap-1 text-tertiary'>
        <Link href='/'>
          <a className='hover:text-primary transition-all cursor-pointer'>
            SERVICIOS
          </a>
        </Link>
      </div>
      <div className='flex flex-row gap-1 text-tertiary'>
        <Link href='/'>
          <a className='hover:text-primary transition-all cursor-pointer'>
            Eventos de Imágen
          </a>
        </Link>
      </div>
      <div className='flex flex-row gap-1 text-tertiary'>
        <Link href='/'>
          <a className='hover:text-primary transition-all cursor-pointer'>
            Otros Eventos
          </a>
        </Link>
      </div>
      <div className='flex flex-row gap-1 text-tertiary'>
        <Link href='/'>
          <a className='hover:text-primary transition-all cursor-pointer'>
            Uniformes
          </a>
        </Link>
      </div>
    </motion.nav>
  )
}
