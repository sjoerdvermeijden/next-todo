import Header from './components/Header'
import Footer from './components/Footer'

import Container from './components/Container'
import Todos from './components/Todos'


export default function Home() {
  return (
    <div>
      <Header />
      <div className='flex flex-col items-center py-20'>
        <Container className='mb-2'>
          <form action="" className='flex'>
            <input type="text" name="" id="" className='grow rounded-l px-2' />
            <input className='bg-slate-800 text-white py-1 px-2 rounded-r' type="submit" value="Add Todo" />
          </form>
        </Container>
        <Container>
          <Todos />
        </Container>
      </div>
      <Footer />
    </div>
  );
}
