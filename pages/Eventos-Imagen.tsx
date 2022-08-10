import Arubamu from 'bento/Arubamu'
import Bento from 'bento/Bento'
import Footer from 'bento/Footer'
import Izakaya from 'bento/Izakaya'
import SushishoUsed from 'bento/SushishoUsed'
import SushitenUsed from 'bento/SushitenUsed'

export default function Home() {
  return (
    <>
      <Izakaya />
      <SushishoUsed />
      <SushitenUsed />
      <Bento />
      <Arubamu />
      <Footer />
    </>
  )
}
