
// sets a variable on click - that can be used to add "className" in an element 

import { useState } from "react"


const useAddClass = (className) => {

    const [click, setClick] = useState("");
    const handleClick = () => setClick(className);

  return { click , setClick, handleClick }
}
export default useAddClass