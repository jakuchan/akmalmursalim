import profilePicture from "../assets/profile-portfolio.png";
import "../styles/Header.css";
import { FaInstagram } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


function Header() {
  return (
    <header >
      <div className="header-jumbotron">
        <div className="profile"><img  src={profilePicture} /></div>
        <h3>Muhammad Akmal Mursalim</h3>
        <p>
          Software Engineer at SMK Telkom Banjarbaru
        </p>
        <div className="socialMedia">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaGithubSquare /></a>
          <a href="#"><FaFacebookSquare /></a>
          <a href="#"><FaYoutube /></a>

          


        </div>
      </div>
    </header>
  );
}

export default Header;
