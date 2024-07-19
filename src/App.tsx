
import './App.css'
import Celebrations from './components/Celebrations/Celebrations'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import Tourism from './components/Tourism/Tourism'
import Foods from './components/Foods/Foods'


function App() {

  return (
    <>
      <main>
        <Header/>
        <HeroSection/>
        <Celebrations/>
        <Foods/>
        <Tourism/>
      </main>
    </>
  )
}

export default App
