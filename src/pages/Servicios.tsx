import Bento from 'src/common/components/elements/02 Body/06 WelcomeDescriptionText'
import Izakaya from 'src/common/components/elements/01 Head/11 ToggleDarkModeButton'
import ShashinArubamu from 'src/common/components/elements/02 Body/13 CardsPropsImproved'
import Sushisho from 'src/common/components/elements/01 Head/01 Menu'
import Sushiten from 'src/common/components/elements/01 Head/02 SecondaryMenu'
import Bottom from 'src/common/components/elements/02 Body/15 Bottom'
import Meta from 'src/uncommon/components/elements/00 Header/00 Meta/05 Servicios/components/elements/00 Header/00 Meta'
import Carrousel from 'src/common/components/elements/02 Body/24 Carrousel'
import Section from 'src/common/components/elements/02 Body/22 Section'

export default function Home() {
  return (
    <>
      <Meta />
      <Izakaya />
      <Sushisho />
      <Section />
      <Section />
      <Sushiten />
      <Carrousel />
      <Bento />
      <ShashinArubamu />
      <Bottom />
    </>
  )
}
