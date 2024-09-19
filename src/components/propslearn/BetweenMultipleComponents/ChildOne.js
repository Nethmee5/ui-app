import React, { useContext } from "react";
import MyContext from "./MyContext";

function ChildOne(){

    const getValue = useContext(MyContext);
    console.log(getValue, "from child one");
    
    return(
        <div>Child One</div>
    )
}
export default ChildOne;