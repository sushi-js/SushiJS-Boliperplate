import Link from 'next/link'

const ExternalLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <a
    className='text-gray-500 hover:text-gray-600 transition'
    target='_blank'
    rel='noopener noreferrer'
    href={href}
  >
    {children}
  </a>
)

export default function Footer() {
  return (
    <div>
      <hr className='w-full border-1 border-gray-200 dark:border-gray-800 mb-8' />
      <div className='w-full max-w-3xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3 mx-auto flex justify-between items-center'>
        <div className='flex flex-col space-y-4'>
          <Link href='/'>
            <a className='text-gray-500 hover:text-gray-600 transition'></a>
          </Link>
          <Link href='https://www.instagram.com/bcnhostess'>
            Instagram
          </Link>
        </div>
        <div className='flex flex-col space-y-4'>
          <Link href='/Servicios'>
            <a className='text-gray-500 hover:text-gray-600 transition'></a>
          </Link>
          <Link href='https://www.instagram.com/bcnhostess'>
            Servicios
          </Link>
        </div>
        <div className='flex flex-col space-y-4'>
          <Link href='/Legal'>
            <a className='text-gray-500 hover:text-gray-600 transition'></a>
          </Link>
          <Link href='/Legal'>
            Legal
          </Link>
        </div>
        <div className='flex flex-col space-y-4'>
          <Link href='/ToS'>
            <a className='text-gray-500 hover:text-gray-600 transition'></a>
          </Link>
          <Link href='/ToS'>
            Términos y Condiciones
          </Link>
        </div>
      </div>
    </div>
  )
}
