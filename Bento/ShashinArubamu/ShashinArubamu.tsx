/* eslint-disable @next/next/no-img-element */
import React from 'react'

const posts = [
  {
    imageUrl: 'https://bcnhostess.com/wp-content/uploads/Tinder.jpg',
    title: 'Tinder',
    category: { name: 'Eventos, Street Marketing' },
    description:
      'Evento en el Hotel Wela, en donde se informo el funcionamiento de la aplicación',
  },
  {
    imageUrl: 'https://bcnhostess.com/wp-content/uploads/Samsung.jpg',
    title: 'Samsung',
    category: { name: 'Eventos' },
    description:
      'Evento privado para invitados del MWC (mobile World congress).',
  },
  {
    imageUrl: 'https://bcnhostess.com/wp-content/uploads/Telefonica-2.jpg',
    title: 'Telefónica',
    category: { name: 'Eventos, Eventos deportivos' },
    description:
      'Proveedores oficiales durante 4 años, evento realizado en Diagonal 00 Torre Telefónica.',
  },
  {
    imageUrl: 'https://bcnhostess.com/wp-content/uploads/perrier-1.jpg',
    title: 'Perrier',
    category: { name: 'Bebidas, Eventos, Festival, Sampling' },
    description:
      'Evento con Perrier en festivales: Madrid - Mercado de diseño, Mercado de Motores, Mulafest',
  },

  {
    imageUrl: 'https://bcnhostess.com/wp-content/uploads/VICE4.jpg',
    title: 'VICE',
    category: { name: 'Eventos, Fashion' },
    description:
      'Festival Cara B, es un festival de cultura musical independiente y urbana, que se celebra en Barcelona',
  },
  {
    imageUrl: 'https://bcnhostess.com/wp-content/uploads/Figaro2-1.jpg',
    title: 'Figaro',
    category: { name: 'Eventos, Peluquería' },
    description:
      'Premios Fígaro. El evento más importante del calendario de la peluquería española.',
  },
  {
    imageUrl: 'https://bcnhostess.com/wp-content/uploads/VIKINGO.jpg',
    title: 'Vikingo',
    category: { name: 'Bebidas, Eventos' },
    description:
      'Evento realizado en el congreso CCIB (centre convencions internacional Barcelona).',
  },
  {
    imageUrl: 'https://bcnhostess.com/wp-content/uploads/Corona.jpg',
    title: 'Corona',
    category: { name: 'Bebidas, Eventos, Street Marketing' },
    description: 'Campaña de verano realizada en Barcelona y alrededores',
  },
  {
    imageUrl: 'https://bcnhostess.com/wp-content/uploads/MYM.jpg',
    title: 'M&M',
    category: { name: 'Sampling' },
    description: 'Campaña de Sampling M&M, realizada en Andorra y Baqueira',
  },
  {
    imageUrl: 'https://bcnhostess.com/wp-content/uploads/Movistar-1-1.jpg',
    title: 'Movistar',
    category: { name: 'Eventos, Fashion' },
    description:
      'Durante años somos responsables de proveer el staff con protocolo de actuación en circuitos para grandes premios F1 y Moto GP',
  },
  {
    imageUrl:
      'https://bcnhostess.com/wp-content/uploads/ee318ded-4f4b-44d0-8472-c82b1aa302ea-1.jpg',
    title: 'Beefeater',
    category: { name: 'Bebidas, Eventos, Street Marketing' },
    description:
      'Evento con Beefeater en Mad Cool Festival. Festival de música que se realiza en Madrid en donde el arte.',
  },
  {
    imageUrl: 'https://bcnhostess.com/wp-content/uploads/Montibello0.jpg',
    title: 'Montibello',
    category: { name: 'Eventos, Peluquería' },
    description:
      'Principal cliente, servicio en la Gala realizada en la feria Cosmo Beauty. Fabrican y distribuyen productos de cosmética profesional.',
  },
  {
    imageUrl: 'https://bcnhostess.com/wp-content/uploads/Adidas_1.jpg',
    title: 'Adidas',
    category: { name: 'Eventos deportivos, Motor' },
    description:
      'Presentación nuevo lanzamiento, en el Gran Premio de España F1, Montemelo, circuito de Catalunya.',
  },
  {
    imageUrl: 'https://bcnhostess.com/wp-content/uploads/IQOS_3.2.jpg',
    title: 'IQOS',
    category: { name: 'Eventos, In Store' },
    description:
      'IQOS es una línea de productos de tabaco caliente y cigarrillos electrónicos. Explore nuestras alternativas sin humo.',
  },
]

export default function Example() {
  return (
    <div className='relative bg-white dark:bg-black px-4 sm:px-6'>
      <div className='bg-white dark:bg-black h-1/3 sm:h-2/3' />
      <div className='relative max-w-7xl mx-auto'>
        <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-6xl'>
          {posts.map(post => (
            <div
              key={post.title}
              className='flex flex-col rounded-lg shadow-lg overflow-hidden'
            >
              <div className='flex-shrink-0'>
                <img
                  className='h-48 w-full object-cover'
                  src={post.imageUrl}
                  alt=''
                />
              </div>
              <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                <div className='flex-1'>
                  <p className='text-sm font-medium text-indigo-600'>
                    <a>{post.category.name}</a>
                  </p>
                  <a className='block mt-2'>
                    <p className='text-xl font-semibold text-gray-900'>
                      {post.title}
                    </p>
                    <p className='mt-3 text-base text-gray-500'>
                      {post.description}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
