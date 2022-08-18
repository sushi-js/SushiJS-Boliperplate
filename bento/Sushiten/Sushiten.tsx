import React from 'react'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Sushiten() {
  return (
    <div className='hidden xl:inline'>
   <motion.nav
      className='px-8 py-4 drop-shadow-xl max-w-6xl w-full bg-white-800 z-[1] filter-blur dark:bg-gray-800 top-10 md:top-20 rounded-md mx-auto flex justify-between items-center'
      animate={{ y: -10 }}
      transition={{ duration: 0.5 }}
    >
      <div className='flex flex-row gap-1 text-tertiary'>
        <Link href='/In-Store'>
          <a className='hover:text-primary transition-all cursor-pointer'>
            In Store
          </a>
        </Link>
      </div>
      <div className='flex flex-row gap-1 text-tertiary'>
        <Link href='/Street-Marketing'>
          <a className='hover:text-primary transition-all cursor-pointer'>
            Street Marketing
          </a>
        </Link>
      </div>
      <div className='flex flex-row gap-1 text-tertiary'>
        <Link href='/Ferias-Congresos'>
          <a className='hover:text-primary transition-all cursor-pointer'>
            Ferias y Congresos
          </a>
        </Link>
      </div>
      <div className='flex flex-row gap-1 text-tertiary'>
        <Link href='/Servicios'>
          <a className='hover:text-primary transition-all cursor-pointer'>
            SERVICIOS
          </a>
        </Link>
      </div>
      <div className='flex flex-row gap-1 text-tertiary'>
        <Link href='/Eventos-Imagen'>
          <a className='hover:text-primary transition-all cursor-pointer'>
            Eventos de Imágen
          </a>
        </Link>
      </div>
      <div className='flex flex-row gap-1 text-tertiary'>
        <Link href='/Otros-Eventos'>
          <a className='hover:text-primary transition-all cursor-pointer'>
            Otros Eventos
          </a>
        </Link>
      </div>
      <div className='flex flex-row gap-1 text-tertiary'>
        <Link href='/Uniformes'>
          <a className='hover:text-primary transition-all cursor-pointer'>
            Uniformes
          </a>
        </Link>
      </div>
    </motion.nav>
    </div>
  )
}
