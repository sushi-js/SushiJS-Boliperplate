import Bento from 'bento/05 Bento'
import Izakaya from 'bento/11 Izakaya'
import ShashinArubamu from 'bento/13 ShashinArubamu'
import Sushisho from 'bento/01 Sushisho'
import Sushiten from 'bento/03 Sushiten'
import Bottom from 'bento/18 Bottom'
import Meta from 'bento/19 Meta'
// import Appbar from 'bento/Appbar'
import Section from 'bento/20 Section'
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
      <Bento />
      <ShashinArubamu />
      <Bottom />
    </>
  )
}
