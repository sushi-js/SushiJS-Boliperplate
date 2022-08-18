import Bento from 'bento/Bento'
import Izakaya from 'bento/Izakaya'
import ShashinArubamu from 'bento/ShashinArubamu'
import Sushisho from 'bento/Sushisho'
import Sushiten from 'bento/Sushiten'
import Bottom from 'bento/Bottom'
import Meta from 'bento/Meta'
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
