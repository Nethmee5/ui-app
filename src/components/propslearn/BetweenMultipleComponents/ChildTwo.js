import React,{useContext, useEffect} from "react";
import MyContext from "./MyContext";



function ChildTwo(){

    const getValue = useContext(MyContext);
    // const {id,name}=getValue
    const [{id,name}] = getValue
    useEffect(()=>{
        console.log(getValue, "from child two");
    },[])

    return(
        <div>Child Two {id} {name}</div>
    )

}
export default ChildTwo;