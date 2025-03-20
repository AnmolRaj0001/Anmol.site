import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Anmol from './Components/Anmol/Anmol'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Mywork from './Components/Mywork/Mywork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Anmol/>
      <About/>
      <Services/>
      <Mywork/>
      <Contact/>
      <Footer/>

      
    </div>
  )
}

export default App
