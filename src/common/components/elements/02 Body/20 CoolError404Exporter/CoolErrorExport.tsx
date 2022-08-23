import CoolError from 'src/common/components/elements/02 Body/19 CoolError404'

export default function Home() {
  return (
    <>
        <div className='py-16 flex flex-col items-center justify-center inset-0'>
          <CoolError
            slides={[
              'Error',
              '404',
              'Ops',
            ]}
          />
        </div>
      </>

  )
}

