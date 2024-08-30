import About from "../components/About"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Portofolio from "../components/Portofolio"

function Home() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Portofolio/>
        <About/>
        <Footer/>
    </div>
  )
}

export default Home