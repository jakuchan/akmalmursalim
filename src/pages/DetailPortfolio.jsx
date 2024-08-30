import { Navigate, useParams } from "react-router-dom"
import '../styles/DetailPortfolio.css'
import { portfolioList } from '../data/DataPorfolio'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";


function DetailPortfolio() {
    const { id } = useParams();
    const data = portfolioList.find((item) => item.id === id)
    if(data == undefined){
        return <Navigate to='/page-not-found'/>
    }
  return (
<>
    <Navbar/>
    <section id="detail-portfolio">
        <div className="wrapper">
            <h1>{data.title}</h1>
            <img src={data.image} />
            <p className="skill"><b>Languages & Tools: {data.skill}</b></p>
        </div>
    </section>
    <Footer/>
    <ScrollToTop/>
    </>
  )
}

export default DetailPortfolio