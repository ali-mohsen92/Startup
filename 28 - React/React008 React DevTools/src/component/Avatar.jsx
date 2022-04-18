import React from "react";
import contacts from "../contacts";
import Cards from "./Cards";
function Avatar(props)
{
    return (<img
        className="circle-img"
        src={props.imgURL}
        alt="avatar_img"
      />);
}
export default Avatar;