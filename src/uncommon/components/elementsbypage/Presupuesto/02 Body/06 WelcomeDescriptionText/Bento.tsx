import React from 'react'

const svgToDataUri = require('mini-svg-data-uri')

export default function Bento() {
  return (
    <div className="columns-2">
    <div className='relative bg-white dark:bg-black pt-16 px-4 sm:px-6 lg:pt-12 lg:px-8'>
      <div className='bg-white dark:bg-black h-1/3 sm:h-2/3' />
      <div className='relative max-w-7xl mx-auto'>
        <div className='py-8 text-center'>
          <h2 className='py-0 text-3xl tracking-tight font-extrabold sm:text-4xl dark:text-white'>
            Contacto
          </h2>
          <p className='px-4 sm:px-6 lg:px-8 mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4'>
            La experiencia nos avala con más de 30 años de trayectoria, siendo
            una de las agencias más antiguas de España. Barcelona Hostess está
            formada por un equipo multidisciplinar, siendo actualmente una de
            las agencias líderes en servicios de imagen, protocolo y acciones de
            marketing.
          </p>
          
            <div className="bg-white dark:bg-black h-1/3 sm:h-2/3 py-8 grid grid-cols-1 gap-6 ">
            <div className='py-8 text-center '>
              <label className="block relative max-w-7xl mx-auto">
                <span className="text-gray-700">Full name</span>
                <input type="text" className="mt-1 block w-full" placeholder="" />
              </label>
              <label className="block">
                <span className="text-gray-700">Company Name</span>
                <input type="text" className="mt-1 block w-full" placeholder="" />
              </label>
              <label className="block ">
                <span className="text-gray-700  justify-center">Email address</span>
                <input type="email" className="mt-1 block w-full  justify-center" placeholder="john@example.com" />
              </label>
              <label className="block">
                <span className="text-gray-700">When the event begins?</span>
                <input type="date" className="mt-1 block w-full" />
              </label>
              <label className="block">
                <span className="text-gray-700">When the event ends?</span>
                <input type="date" className="mt-1 block w-full" />
              </label>
          
              <label className="block">
                <span className="text-gray-700">What type of service do you need?</span>
                <select className="block w-full mt-1">
                  <option>Eventos</option>
                  <option>Sampling</option>
                  <option>Azafatas de Imágen</option>
                  <option>Azafata feria y congreso</option>
                  <option>Promotora</option>
                  <option>Modelos</option>
                  <option>Modelo peluquería</option>
                  <option>Maquilladores</option>
                  <option>Azafata/os para Festivales</option>
                  <option>Azafata bebida espirituosa</option>
                  <option>Otros</option>
                </select>
              </label>
              <label className="block">
                <span className="text-gray-700">Additional details</span>
                </label>
              <div className="block">
                <div className="mt-2">
                  <div>
                    <label className="inline- items-center">
                      <input type="checkbox" checked />
                      <span className="ml-2">Consiento el uso de mis datos para los fines indicados en la política de privacidad SUS DATOS SEGUROS</span>
                    </label>
                  </div>
                  </div>
                </div>
                <div className="mt-2">
                  <div>
                    <label className="inline- items-center">
                      <input type="checkbox" checked />
                      <span className="ml-2">Consiento el uso de mis datos personales para recibir publicidad de su entidad</span>
                    </label>
                  </div>
                  </div>
                </div>
                <p>
                <input type="submit" value="Enviar" className="wpcf7-form-control wpcf7-submit"></input>
                <span className="ajax-loader"></span>
                </p>
              </div>
        </div>
        </div>
        </div>
    </div>
  )
}
