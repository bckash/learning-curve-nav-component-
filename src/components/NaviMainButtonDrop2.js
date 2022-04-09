
import DropdownMenu2 from "./DropdownMenu2";
import useHoverButton from "./sub-components/useHoverButton";

const NaviMainButtonDrop2 = ( { title, cl } ) => {

  const { disp, hoverOn, hoverOff } = useHoverButton();

  return (
    <li className={`nav-main__button dropdown-us ${cl}`}>
        <a 
          className="hover-pointer"
          onMouseEnter={hoverOn}
          onMouseLeave={hoverOff}
          >
            {title}
          </a>
        { disp && <DropdownMenu2 /> }
    </li>
  )
}
export default NaviMainButtonDrop2