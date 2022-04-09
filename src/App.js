
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderLogo from "./components/HeaderLogo";
import NaviMain from "./components/NaviMain";
import Info from "./pages/Info";
import VerticalAlign from "./pages/VerticalAlign";
import Flexbox from "./pages/Flexbox";
import Grid from "./pages/Grid";
import Centre from "./pages/Centre";
import RelAbs from "./pages/RelAbs";
import Animation from "./pages/Animation";
import Chunks from "./pages/Chunks";
import Js from "./pages/Js";
import Www from "./pages/Www";
import Aps from "./pages/Aps";
import { UserContext } from "./components/sub-components/UserContext";


function App() {


  return (
    <Router>
        <div className="App">
          
          <UserContext.Provider value={ { } }>
            <HeaderLogo />
            <NaviMain  />
          </UserContext.Provider>

          <Routes>
            <Route path="/" element={<Info />} />
            <Route path="/Info" element={<Info />} />
            <Route path="/Www" element={<Www /> } />
            <Route path="/Aps" element={<Aps /> } />
            <Route path="/verticalalign" element={<VerticalAlign />} />
            <Route path="/flexbox" element={<Flexbox/>} />
            <Route path="/grid" element={<Grid/>} />
            <Route path="/centre" element={<Centre/>} />
            <Route path="/relabs" element={<RelAbs/>} />
            <Route path="/Animation" element={<Animation/>} />
            <Route path="/Chunks" element={<Chunks/>} />
            <Route path="/Js" element={<Js/>} />             
          </Routes>
          
        </div>
    </Router>
  );
}

export default App;
