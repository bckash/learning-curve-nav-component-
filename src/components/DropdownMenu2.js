
import "./DropdownMenu.css"
import { NavLink } from "react-router-dom";
import { MenuItemContentSchool } from "./sub-components/MenuItemContentSchool"
import { useEffect } from "react";
import useAddClass from "./sub-components/useAddClass";

const DropdownMenu2 = () => {

  const { click, setClick, handleClick } = useAddClass("hide-menu");

  useEffect(() => {
    setTimeout(() => setClick(""),50);
  }, [click]);

  return (
    <div className={`dropdown-holder-us ${click}`}>
      {/* here menu unfolds */}
    {MenuItemContentSchool.map((item) => {
      return (
        <NavLink
            to={item.link} 
            className={(navData) => (navData.isActive ? "d-content-us active-style" : 'd-content-us')}
            onClick={handleClick}  
            key={item.id} 
        >
          {item.title}
        </NavLink> 
      )
    })}
    </div>
  )
}
export default DropdownMenu2