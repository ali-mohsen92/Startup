import React, { useState } from "react";



function ToDoItem(props){
    // const [isDone, setIsDone] = useState(false);
    // function Click(){
    //     console.log(props.index)
    //      setIsDone((prevValue)=> {
    //         return !prevValue;
    //     });
    //     }
    return (<div onClick={() => {props.onchecked(props.id);}}><li>{props.text}</li></div>);
}
export default ToDoItem;