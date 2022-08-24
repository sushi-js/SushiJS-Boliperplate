import React from 'react'

export default function Bento() {
  return (
    <div className='relative bg-white dark:bg-black pt-16 px-4 sm:px-6 lg:pt-12 lg:px-8'>
      <div className='bg-white dark:bg-black h-1/3 sm:h-2/3' />
      <div className='relative max-w-7xl mx-auto'>
        <div className='py-8 text-center'>
          <h2 className='py-0 text-3xl tracking-tight font-extrabold sm:text-4xl dark:text-white'>
          Ferias y Congresos
          </h2>
          
          <p className='px-4 sm:px-6 lg:px-8 mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4'>
            La experiencia nos avala con más de 30 años de trayectoria, siendo
            una de las agencias más antiguas de España. Barcelona Hostess está
            formada por un equipo multidisciplinar, siendo actualmente una de
            las agencias líderes en servicios de imagen, protocolo y acciones de
            marketing.
          </p>
        </div>
        <div className='py-8 text-center'>
          <p className='px-4 sm:px-6 lg:px-8 mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4'>
          Las Ferias y congresos son el primer canal de networking para una empresa, el poder establecer contactos con los clientes, proveedores y distribuidores. Por lo tanto, es importante cuidar la imagen para representar plenamente la identidad y filosofía de la empresa.
          </p>
        </div>
        <div className='py-8 text-center'>
          
          <p className='px-4 sm:px-6 lg:px-8 mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4'>
          Barcelona Hostess ofrece personal tanto a ferias como a los expositores. Trabajamos con las principales ferias europeas como el World Mobile Congress en Barcelona.Gracias a nuestra base de datos, con más de 15.000 inscritos, Barcelona Hostess ofrece Hostess Welcome con experiencia, que se adaptan a las necesidades de cada cliente.
          </p>
          </div>
          <div className = 'py-8'>
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/4co2mWvLbFw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe>
          </div>
      </div>
    </div>
  )
}
