import Bento from 'bento/Bento'
import Izakaya from 'bento/Izakaya'
import ShashinArubamu from 'bento/ShashinArubamu'
import Sushisho from 'bento/Sushisho'
import Sushiten from 'bento/Sushiten'

export default function Home() {
  return (
    <>
      <Izakaya />
      <Sushisho />
      <Sushiten />
      <Bento />
      <ShashinArubamu />
    </>
  )
}
