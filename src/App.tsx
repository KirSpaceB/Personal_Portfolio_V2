import LandingPage from './components/LandingPage'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <div className='flex h-screen w-screen'>
        <Sidebar/>
        <LandingPage/>
      </div>
    </>
  )
}

export default App
