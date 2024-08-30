import '../styles/Portfolio.css'
import { portfolioList } from '../data/DataPorfolio'
import { Link } from 'react-router-dom'


function Portofolio() {
  return (
    <section id="portfolio">
        <div className="wrapper">
            <h3>Portfolio</h3>
            <div className="grid">
                {
                    portfolioList.map((item, )=>{
                        return(
                            <div className="item" key={item.id}>
                                <Link  to={`/portfolio/${item.id}`}><img src={item.image} alt="" /></Link>
                    
                             </div>
                        )
                    })
                }
                
            </div>
        </div>
    </section>
  )
}

export default Portofolio