
import "./NaviMain.css";
import NaviMainButton from "./NaviMainButton";
import NaviMainButtonDrop2 from "./NaviMainButtonDrop";
import NaviMainButtonInfo from "./NaviMainButtonInfo";

const NaviMain = () => {

  return (

        <nav>
            <ul className="nav-main">
                <NaviMainButtonDrop2 
                  title="school" 
                  cl="hover-left" 
                />
                <NaviMainButton 
                  title="www" 
                  active="mb-active"
                  link="/www"
                />
                <NaviMainButton 
                  title="aps" 
                  cl="hover-right" 
                  active="mb-active"
                  link="/aps"
                />
            </ul>
            <NaviMainButtonInfo />
      </nav>

  )
}
export default NaviMain