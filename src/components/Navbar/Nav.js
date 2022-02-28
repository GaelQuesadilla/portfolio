import "./navStyle.scss"
import { FaUserGraduate } from "react-icons/fa";

const Nav = (props) => {
  return (
    <div className="nav">
      <ul className="nav-list nav-list--li">
        <li className="nav-list__element">
          <FaUserGraduate />
        </li>
        <li className="nav-list__element">
          <span>Portfolio</span>
        </li>
      </ul>
    </div>
  );
}

export default Nav