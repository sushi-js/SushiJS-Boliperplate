import Contacto from 'src/common/components/elements/02 Body/26 Presupuesto'
import Izakaya from 'src/common/components/elements/01 Head/11 ToggleDarkModeButton'
import Sushisho from 'src/common/components/elements/01 Head/01 Menu'
import Sushiten from 'src/common/components/elements/01 Head/02 SecondaryMenu'
import Bottom from 'src/common/components/elements/02 Body/15 Bottom'
import Meta from 'src/common/components/elements/00 Header/00 Meta'
import Section from 'src/common/components/elements/02 Body/22 Section'
import Footer from 'src/common/components/elements/03 Footer/25 Footer/Footer'

export default function Home() {
  return (
    <>
      <Meta />
      <Izakaya />
      <Sushisho />
      <Section />
      <Section />
      <Sushiten />
      <Contacto />
      <Bottom />   
      <Footer />
    </>
  )
}
