/* eslint-disable @next/next/no-img-element */
import React from 'react'

const posts = [
  {
    imageUrl:
      'https://github.com/miguelgargallo/SushiJS-Example-001/blob/main/bento/Arubamu/BCNHostess-cliente-Tinder.jpg?raw=true?raw=true',
    title: 'Tinder',
    category: { name: 'Eventos, Street Marketing' },
    description:
      'Evento en el Hotel Wela, en donde se informo el funcionamiento de la aplicación.',
  },
  {
    imageUrl:
      'https://github.com/sushi-js/SushiJS-Example-01/blob/main/bento/Arubamu/BCNHostess-cliente-Perrier.jpg?raw=true?raw=true',
    title: 'Perrier',
    category: { name: 'Bebidas, Eventos, Festival, Sampling' },
    description:
      'Evento con Perrier en festivales: Madrid - Mercado de diseño, Mercado de Motores, Mulafest',
  },
  {
    imageUrl:
      'https://github.com/miguelgargallo/SushiJS-Example-001/blob/main/bento/Arubamu/BCNHostess-cliente-MOTOGP.jpg?raw=true',
    title: 'MotoGP',
    category: { name: 'Bebidas, Eventos, Festival, Sampling' },
    description: 'Gran Premio de Cataluña, circuito de Montemelo.',
  },
  {
    imageUrl:
      'https://github.com/sushi-js/SushiJS-Example-01/blob/main/bento/Arubamu/BCNHostess-cliente-Samsung.jpg?raw=true',
    title: 'Samsung',
    category: { name: 'Eventos' },
    description:
      'Evento privado para invitados del MWC (mobile World congress).',
  },
  {
    imageUrl:
      'https://github.com/sushi-js/SushiJS-Example-01/blob/main/bento/Arubamu/BCNHostess-cliente-MM.jpg?raw=true',
    title: 'M&M',
    category: { name: 'Sampling' },
    description: 'Campaña de Sampling M&M, realizada en Andorra y Baqueira',
  },
  {
    imageUrl:
      'https://github.com/sushi-js/SushiJS-Example-01/blob/main/bento/Arubamu/BCNHostess-cliente-VICE.jpg?raw=true',
    title: 'VICE',
    category: { name: 'Eventos, Eventos deportivos' },
    description:
      'Festival Cara B, es un festival de cultura musical independiente y urbana, que se celebra en Barcelona, se posiciona como el principal escaparate de las tendencias musicales y los sonidos más frescos del momento.',
  },
  {
    imageUrl:
      'https://github.com/sushi-js/SushiJS-Example-01/blob/main/bento/Arubamu/BCNHostess-cliente-Movistar.jpg?raw=true',
    title: 'Movistar',
    category: { name: 'Eventos, Fashion' },
    description:
      'Durante años fuimos los responsable de proveer el staff para grandes premios no solo de F1 sino que también de Moto GP, conocemos muy bien los protocolos de actuación en los circuitos.',
  },
  {
    imageUrl:
      'https://github.com/sushi-js/SushiJS-Example-01/blob/main/bento/Arubamu/BCNHostess-cliente-Telefonica.jpg?raw=true',
    title: 'Telefónica',
    category: { name: 'Eventos, Fashion' },
    description:
      'Proveedores oficiales durante 4 años, evento realizado en Diagonal 00 Torre Telefónica.',
  },
  {
    imageUrl:
      'https://github.com/sushi-js/SushiJS-Example-01/blob/main/bento/Arubamu/BCNHostess-cliente-Corona.jpg?raw=true',
    title: 'Corona',
    category: { name: 'Bebidas, Eventos, Street Marketing' },
    description: 'Campaña de verano realizada en Barcelona y alrededores.',
  },
  {
    imageUrl:
      'https://github.com/sushi-js/SushiJS-Example-01/blob/main/bento/Arubamu/BCNHostess-cliente-IQOS.jpg?raw=true',
    title: 'IQOS',
    category: { name: 'Eventos, In Store' },
    description:
      'Co_Lab Café by IQOS, Madrid. Espacio en el que nuestros expertos te asesorarán sobre este nuevo dispositivo electrónico que calienta el tabaco en lugar de quemarlo y te resolverán cualquier duda o incidencia. Pensado para reunir diversas personalidades, conectar ideas, promocionar la experimentación y compartir ejemplos sobre transformación y cambio.',
  },
  {
    imageUrl:
      'https://github.com/sushi-js/SushiJS-Example-01/blob/main/bento/Arubamu/BCNHostess-cliente-Figaro.jpg?raw=true',
    title: 'Figaro',
    category: { name: 'Eventos, Peluquería' },
    description:
      'Premios Fígaro. El evento más importante del calendario de la peluquería española, donde se presentaron las quince colecciones finalistas antes de la entrega de galardones.',
  },
  {
    imageUrl: 
    'https://github.com/sushi-js/SushiJS-Example-01/blob/main/bento/Arubamu/BCNHostess-cliente-Vikingo.jpg?raw=true',
    title: 'Vikingo',
    category: { name: 'Bebidas, Eventos' },
    description:
      'Evento realizado en el congreso CCIB (centre convencions internacional Barcelona).',
  },
  {
    imageUrl:
    'https://github.com/sushi-js/SushiJS-Example-01/blob/main/bento/Arubamu/BCNHostess-cliente-Montibello.jpg?raw=true',
    title: 'Montibello',
    category: { name: 'Eventos, Peluquería' },
    description:
      'Principal cliente, servicio en la Gala realizada en la feria Cosmo Beauty. Fabrican y distribuyen productos de cosmética profesional.',
  },
  {
    imageUrl: 
    'https://github.com/sushi-js/SushiJS-Example-01/blob/main/bento/Arubamu/BCNHostess-cliente-Adidas.jpg?raw=true',
    title: 'Adidas',
    category: { name: 'Eventos deportivos, Motor' },
    description:
      'Presentación nuevo lanzamiento, en el Gran Premio de España F1, Montemelo, circuito de Catalunya.',
  },
  {
    imageUrl:
      'https://bcnhostess.com/wp-content/uploads/ee318ded-4f4b-44d0-8472-c82b1aa302ea-1.jpg?raw=true',
    title: 'Beefeater',
    category: { name: 'Bebidas, Eventos, Street Marketing' },
    description:
      'Evento con Beefeater en Mad Cool Festival. Festival de música que se realiza en Madrid en donde el arte.',
  },

]

export default function Example() {
  return (
    <div className='relative bg-white dark:bg-black px-4 sm:px-6'>
      <div className='bg-white dark:bg-black h-1/3 sm:h-2/3' />
      <div className='relative max-w-5xl mx-auto'>
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
