

import DropdownMenu2 from "./DropdownMenu2";
import useHoverButton from "./sub-components/useHoverButton";

const NaviMainButtonDrop = ( { title, cl } ) => {

  const { disp, hoverOn, hoverOff } = useHoverButton();

  return (
    <li 
      className={`nav-main__button dropdown-us ${cl}`} 
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
    >
        <a className="hover-pointer">{title}</a>
        { disp && <DropdownMenu2 /> }
    </li>
  )
}
export default NaviMainButtonDrop