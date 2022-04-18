import React from "react";
import ReactDOM from "react-dom";


function Cards(props){
return (<div>
    <h2>{props.name}</h2>
    <img
      src= {props.img}
      alt={props.alt}
    />
    <p>{props.tel}</p>
    <p>{props.email}</p></div>
    );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Cards
    name="Beyonce"
    img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    alt="avatar_img"
    tel= "+123 456 789"
    email= "b@beyonce.com" />
     <Cards
    name="Jack Bauer"
    img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
    alt="avatar_img"
    tel= "+987 654 321"
    email= "jack@nowhere.com" />
     <Cards
    name="Chuck Norris"
    img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
    alt="avatar_img"
    tel= "+918 372 574"
    email= "gmail@chucknorris.com" />
  </div>,
  document.getElementById("root")
);


/* 

function Cards(props){
return (<div>
    <h2>{props.name}</h2>
    <img
      src= {props.img}
      alt={props.alt}
    />
    <p>{props.tel}</p>
    <p>{props.email}</p></div>
    );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Cards
    name="Beyonce"
    img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    alt="avatar_img"
    tel= "+123 456 789"
    email= "b@beyonce.com" />
     <Cards
    name="Jack Bauer"
    img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
    alt="avatar_img"
    tel= "+987 654 321"
    email= "jack@nowhere.com" />
     <Cards
    name="Chuck Norris"
    img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
    alt="avatar_img"
    tel= "+918 372 574"
    email= "gmail@chucknorris.com" />
  </div>,
  document.getElementById("root")
);
using props we are able to add as many cards as we want using the
function(props), props.name will be able to be sent instead of adding each
split which increases info and useless data
*/