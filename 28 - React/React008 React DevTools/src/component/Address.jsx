import React from "react";
import Cards from "./Cards";
function Address(props){
    return ( <div className="bottom">
    <p className="info">{props.phone}</p>
    <p className="info">{props.email}</p>
  </div>);
}
export default Address