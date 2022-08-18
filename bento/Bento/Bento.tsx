import React from 'react'

export default function Bento() {
  return (
    <div className='relative bg-white dark:bg-black pt-16 px-4 sm:px-6 lg:pt-12 lg:px-8'>
      <div className='bg-white dark:bg-black h-1/3 sm:h-2/3' />
      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center'>
          <h2 className='py-0 text-3xl tracking-tight font-extrabold sm:text-4xl dark:text-white'>
            Nuestros Clientes
          </h2>
          <p className='px-4 sm:px-6 lg:px-8 mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4'>
            La experiencia nos avala con más de 30 años de trayectoria, siendo
            una de las agencias más antiguas de España. Barcelona Hostess está
            formada por un equipo multidisciplinar, siendo actualmente una de
            las agencias líderes en servicios de imagen, protocolo y acciones de
            marketing.
          </p>
        </div>
      </div>
    </div>
  )
}
