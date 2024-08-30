import '../styles/About.css'
import { TbBrandLaravel } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";



function About() {
  return (
    <section id='about'>
        <div className="wrapper">
            <h3>About</h3>
            <p>I have the skills and experience in website development for 2 years, am capable of actively communicating within the team, can lead and manage a team, and am able to adapt and identify problems in the workplace.</p>
        <h4>Programming Languages & Tools</h4>
        <div className="skills">
        <TbBrandLaravel />

        <FaHtml5 />
        <FaCss3Alt />
        <SiPhp />
        <RiFlutterFill />


        </div>
        </div>
    </section>
  )
}

export default About