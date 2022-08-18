import Link from 'next/link'

import Container from 'bento/Container'

export default function NotFound() {
  return (
    <Container title='Error 404'>
      <div className='my-2 sm:my-4 md:my-8 flex flex-col justify-center items-start max-w-2xl mx-auto mb-16'>
        <h1 className='font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white'>
          Muy buenas, esto es un codigo 404, repito, tenemos un código 404, ha
          sido notificado al departamento de IT
        </h1>
        <div className='flex flex-col space-y-12'>
          <p className=' text-gray-600 dark:text-gray-400'>
            Cuídado, si te ve Fintch, el de seguridad, puedes estar en
            <a className='italic'> problemas</a>. Si has encontrado un error, y
            has acabado aquí, reportalo por Mensae Direco por Twiter al botón de
            abajo! y vuelve al menú, picando el logo o el segundo botón 👇
          </p>
          <Link href='https://twiter.com/itamaesanorg'>
            <a className='mx-auto px-12 py-4 font-bold text-lg rounded-md text-gray-900 bg-gray-100 dark:text-gray-100 dark:bg-gray-800'>
              Enviar MD de Twitter ahora
            </a>
          </Link>
          <Link href='/'>
            <a className='mx-auto px-12 py-4 font-bold text-lg rounded-md text-gray-900 bg-gray-100 dark:text-gray-100 dark:bg-gray-800'>
              Volver atrás
            </a>
          </Link>
        </div>
      </div>
    </Container>
  )
}

