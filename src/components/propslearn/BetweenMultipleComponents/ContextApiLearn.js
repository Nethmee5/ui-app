import React from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
import MyContext from "./MyContext";

function Main(){
  return(
    <div>
      //need to warp all the components which use value
        <MyContext.Provider value={[{id:4,name:"savindu"},{id:4,name:"savindu"}]}>
            <ChildOne/>
            <ChildTwo/>
        </MyContext.Provider>
    </div>
  )
}
export default Main;