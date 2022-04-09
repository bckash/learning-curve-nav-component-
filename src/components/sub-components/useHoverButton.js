
// sets a "disp" - boolean variable, which changes on mouseEnter and mouseLeave event. If disp="true", <element> will show (as in example below) 
//
// --->  {disp && <elemenet>}

import { useState } from "react";

const useHoverButton = () => {

    const [disp, setDisp] = useState(false);
    const hoverOn = () => setDisp(true)
    const hoverOff = () => setDisp(false)

  return { disp, hoverOn, hoverOff }
}
export default useHoverButton