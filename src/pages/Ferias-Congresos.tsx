import Bento from 'src/common/components/elements/02 Body/05 WelcomeDescriptionText'
import Izakaya from 'src/common/components/elements/01 Head/11 ToggleDarkModeButton'
import ShashinArubamu from 'src/common/components/elements/02 Body/13 CardsPropsImproved'
import Sushisho from 'src/common/components/elements/01 Head/01 Menu'
import Sushiten from 'src/common/components/elements/01 Head/03 SecondaryMenu'
import Bottom from 'src/common/components/elements/02 Body/18 Bottom'
import Meta from 'src/common/components/elements/00 Header/19 Meta'
import Carrousel from 'src/common/components/elements/02 Body/22 Carrousel'
// import Appbar from 'bento/Appbar'
import Section from 'src/common/components/elements/02 Body/20 Section'
// import Page from 'bento/Page'

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
