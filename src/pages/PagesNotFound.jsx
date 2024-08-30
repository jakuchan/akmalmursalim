import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


function PagesNotFound() {
  return (
    <>
     <Navbar/>
    <div className="wrapper">
        <h3>Uh oh!</h3>
        <h4>Halaman tidak ditemukan!</h4>
    </div>
    <Footer/>
    </>
   
  )
}

export default PagesNotFound