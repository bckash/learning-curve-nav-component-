import { useLocation } from "react-router-dom";
import "./HeaderLogo.css";

const HeaderLogo = () => {
  const { pathname } = useLocation();
  return (
    <header>
      <h1 key={pathname} className="head-main">
        learning curve
      </h1>
    </header>
  );
};

export default HeaderLogo;