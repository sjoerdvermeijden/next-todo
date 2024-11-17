import Header from './components/Header'
import Footer from './components/Footer'

import Container from './components/Container'

export default function Home() {
  return (
    <div>
      <Header />
      <div className='flex justify-center'>
        <Container />
      </div>
      <Footer />
    </div>
  );
}
