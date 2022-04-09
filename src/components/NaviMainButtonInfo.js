
import { NavLink } from "react-router-dom";
import "./NaviMainButtonInfo.css";

const NaviMainButtonInfo = () => {
  return (
    <NavLink 
      to="/info"
      className={(navData) => (navData.isActive ? "info-button-active" : '')}
    >
        <span className="material-icons info-button">info</span>
    </NavLink>
  )
}
export default NaviMainButtonInfo