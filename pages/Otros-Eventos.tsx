import Bento from 'bento/Bento'
import Izakaya from 'bento/Izakaya'
import ShashinArubamu from 'bento/13 ShashinArubamu'
import Sushisho from 'bento/Sushisho'
import Sushiten from 'bento/Sushiten'
import Bottom from 'bento/18 Bottom'
import Meta from 'bento/19 Meta'
// import Appbar from 'bento/Appbar'
// import Section from 'bento/Section'
// import Page from 'bento/Page'

export default function Home() {
  return (
    <>
      <Meta />
      <Izakaya />
      <Sushisho />
      <Sushiten />
      <Bento />
      <ShashinArubamu />
      <Bottom />
    </>
  )
}
