import Header from './components/Header'
import Footer from './components/Footer'

import Container from './components/Container'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'


export default function Home() {
  return (
    <div>
      <Header />
      <div className='flex flex-col items-center py-20'>
        <Container className='mb-2'>
          <TodoForm />
        </Container>
        <Container>
          <Todos />
        </Container>
      </div>
      <Footer />
    </div>
  );
}
