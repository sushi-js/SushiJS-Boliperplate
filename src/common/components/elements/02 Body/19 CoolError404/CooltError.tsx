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
    <div className='py-8text-6xl md:text-9xl font-extrabold tracking-tight items-center justify-center'>
      <div className='flex flex-col items-center'>
        <p className='py-8 sm:text-3xl text-2xl tracking-normal'>
          🍣 SushiJS Framework 🍣
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
                  index === 0 ? 'from-pink-600 via-orange-400 to-cyan-600' : '',
                  index === 1 ? 'from-blue-600 via-gray-400 to-red-600' : '',
                  index === 2 ? 'from-yellow-300 via-purple-500 to-white' : ''
                  )}
              >
                {text}
              </span>
            </span>
          )
        })}
        <p className='py-16 mt-4 sm:text-3xl text-2xl tracking-normal'>
          🚀 ULTITMATE FRAMWEORK 🚀
        </p>
        <p className='mt-6 text-lg font-medium tracking-normal'>
          🇯🇵 Designed by ITAMAESAN in Tokyo.
        </p>
      </div>
    </div>
  )
}
