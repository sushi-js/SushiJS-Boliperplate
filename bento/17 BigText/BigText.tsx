// https://github.com/delbaoliveira/website/blob/main/ui/challenge/TextSlider.tsx
import React from 'react'

import { useInterval } from 'react-use'

import classNames from 'lib/classNames'

interface BigTextProps {
  slides: Array<string>
}

export default function BigText({ slides }: BigTextProps) {
  const [currentSlide, setSlide] = React.useState(0)

  const totalSlides = slides.length

  useInterval(() => {
    if (totalSlides - 1 === currentSlide) {
      setSlide(0)
    } else {
      setSlide(currentSlide + 1)
    }
  }, 2000)

  return (
    <div className='text-6xl md:text-9xl font-extrabold tracking-tight flex flex-col items-center'>
      <div className='flex flex-col items-center'>
        <p className='sm:text-3xl text-2xl tracking-normal'>
          🍣 SushiJS, 🍣JS is a
        </p>
        {slides.map((text, index) => {
          return (
            <span key={text} className='relative block text-center'>
              <span
                className={classNames(
                  'absolute transition duration-1000',
                  currentSlide !== index ? 'opacity-100' : 'opacity-0'
                )}
                aria-hidden={true}
              >
                {text}
              </span>

              <span
                className={classNames( 'decoration-clone bg-clip-text text-transparent bg-gradient-to-r',
                  index === 0 ? 'from-blue-600 via-blue-400 to-blue-600' : '',
                  index === 1 ? 'from-gray-600 via-yellow-400 to-gray-600' : '',
                  index === 2 ? 'from-gray-600 via-blue-400 to-yellow-600' : '',
                  index === 3 ? 'from-blue-300 via-blue-500 to-blue-300' : '',
                  index === 4 ? 'from-gray-200 via-green-500 to-gray-600' : '',
                  index === 5 ? 'from-gray-500 via-pink-500 to-gray-500' : '',
                  index === 6 ? 'from-blue-600 via-blue-400 to-blue-600' : '',
                  index === 7 ? 'from-blue-400 via-green-500 to-yellow-500' : '',
                  index === 8 ? 'from-gray-500 via-pink-500 to-gray-500' : ''
                  )}
              >
                {text}
              </span>
            </span>
          )
        })}
        <p className='mt-4 sm:text-3xl text-2xl tracking-normal'>
          🚀 ULTITMATE FRAMWEORK 🚀
        </p>
        <p className='mt-6 text-lg font-medium tracking-normal'>
          🇯🇵 Designed by ITAMAESAN in Tokyo.
        </p>
      </div>
    </div>
  )
}
