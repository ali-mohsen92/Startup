import React from "react";
function Hours(){
    const date = new Date();
    const time = date.getHours();
    const data = {color: "red"};
    var Text = "";
    if(time<12){
      data.color = "red";
      Text = "Good Morning";
    }
    else if(time<18){
      data.color = "green";
      Text = "Good Afternoon";
    }
    else{
      data.color = "blue";
      Text = "Good Evening";
    }
    return (<h1 style={data} className="heading">{Text + " The time is " + time}</h1>);
    }
    export default Hours;

    /*
function Hours(){
    const date = new Date();
    const time = date.getHours();
    const data = {color: "red"};
    var Text = "";
    if(time<12){
      data.color = "red";
      Text = "Good Morning";
    }
    else if(time<18){
      data.color = "green";
      Text = "Good Afternoon";
    }
    else{
      data.color = "blue";
      Text = "Good Evening";
    }
    return (<h1 style={data} className="heading">{Text + " The time is " + time}</h1>);
    }
    export default Hours;
    This is used to export Hours to App.js
    */