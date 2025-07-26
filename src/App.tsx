import { MainInfo, Footer } from './components/';
import { About, Technologies, Experience, Projects, Vivi} from './components/Sections';

function App() {

  return (
    <main className='max-w-[1300px] mx-auto h-auto lg:h-full relative px-6 sm:px-12 md:px-16 lg:px-20 py-[50px] md:py-[90px] font-poppins'>
      <MainInfo />
      <section className='w-full lg:w-1/2 ml-0 lg:ml-auto relative pb-20 sm:pb-0 text-secondary'>
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Footer />
        <Vivi />
      </section>
    </main>
  )
}

export default App
