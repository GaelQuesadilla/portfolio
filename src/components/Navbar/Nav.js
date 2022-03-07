import "./navStyle.scss"
import { FaUserGraduate } from "react-icons/fa";

const Nav = (props) => {
  const description = document.querySelector("meta[name=description]")
  const themeColor = document.querySelector("meta[name=theme-color]")
  const title = document.querySelector("title")


  description.content = "Portfolio personal de Gael Gonzalez Mendez"
  themeColor.content = "#0c172c";
  title.innerHTML = "Portfolio - Gael Gonzalez"
  return (
    <div className="nav">
      <ul className="nav-list nav-list--li">
        <li className="nav-list__element">
          <FaUserGraduate />
        </li>
        <li className="nav-list__element">
          <span>Mi portfolio</span>
        </li>
      </ul>
    </div>
  );
}

export default Nav