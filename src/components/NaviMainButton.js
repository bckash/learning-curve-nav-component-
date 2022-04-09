

import { NavLink } from "react-router-dom"

const NaviMainButton = ( {title, cl, active, link} ) => {
  return (
    <li className={`nav-main__button ${cl}`}>
        <NavLink 
          to={link}
          className={(navData) => (navData.isActive ? active : '')}
        >       
              {title}
        </NavLink> 
    </li>
  )
}
export default NaviMainButton