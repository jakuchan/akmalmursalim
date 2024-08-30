import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaReact } from "react-icons/fa";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

function Experiences() {
  return (
    <>
    <Navbar/>
    <div className="wrapper">
        <h1>Experiences</h1>
        <VerticalTimeline>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2024 - Present"
    iconStyle={{ background: '#222381', color: '#fff' }}
    icon={<FaReact /> }
  >
    <h3 className="vertical-timeline-element-title">Requirement Analysis</h3>
    <h4 className="vertical-timeline-element-subtitle">SMK Telkom Banjarbaru</h4>
    <p>
      Mempelajari ReactJS untuk membuat website portofolio.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaReact />
    }
  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
    <Footer/>
    <ScrollToTop/>
 </>
  )
}

export default Experiences