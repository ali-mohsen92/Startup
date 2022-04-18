import React from "react";
import Address from "./Address";
import App from "./App";
import Avatar from "./Avatar";
function Cards(props){
    return (
          <div className="card">
            <div className="top">
              <h2 className="name">{props.name}</h2>
              <Avatar imgURL={props.imgURL}/>
            </div>
           <Address phone={props.phone} email={props.email}/>
          </div>
        );
}


export default Cards;