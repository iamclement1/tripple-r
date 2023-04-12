import { BacktoTop, Footer, Navbar } from '@/components/layouts'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className='bg-white'>
      <Navbar />
      <Component {...pageProps} />
      <BacktoTop />
      <Footer />
    </div>
  )
}
