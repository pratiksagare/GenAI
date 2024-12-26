import { lazy } from 'react';

const Container = lazy(() => import('./components/Container'));
const Inputs = lazy(() => import('./components/Inputs'));
const Navbar = lazy(() => import('./components/Navbar'));
const ChatsContainer = lazy(() => import('./components/ChatsContainer'));


function App() {
  return (
    <div className="h-screen flex flex-col dark:bg-[#0a0a0a] dark:text-[#ededed]">
      <Container>
        <Navbar />
      </Container>
      {/* <main className="flex-grow   border-black overflow-hidden w-full  max-w-[1200px] mx-auto"> */}
      <main className="flex-grow border-black overflow-y-scroll w-full max-w-[1200px] mx-auto p-4 scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <ChatsContainer />
      </main>
      <Container>
        <Inputs />
      </Container>
    </div>
  )
}

export default App