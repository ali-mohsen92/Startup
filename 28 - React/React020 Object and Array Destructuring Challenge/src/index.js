 //CHALLENGE: uncomment the code below and see the car stats rendered
 import React from "react";
 import ReactDOM from "react-dom";
import cars, {setCarsSpeed} from "./practice";

const [honda,tesla] = cars;
const {speedStats:{topSpeed: teslaTopSpeed},coloursByPopularity:[teslaTopColour]} = tesla;
const {speedStats:{topSpeed: hondaTopSpeed},coloursByPopularity:[hondaTopColour]} = honda;


 ReactDOM.render(
   <table>
     <tr>
       <th>Brand</th>
       <th>Top Speed</th>
     </tr>
     <tr>
       <td>{tesla.model}</td>
       <td>{teslaTopSpeed}</td>
       <td>{teslaTopColour}</td>
     </tr>
     <tr>
       <td>{honda.model}</td>
       <td>{hondaTopSpeed}</td>
       <td>{hondaTopColour}</td>
     </tr>
   </table>,
   document.getElementById("root")
 );
/* 
const {coloursByPopularity: teslaColour, speedStats: teslaSpeed} = tesla;
const {coloursByPopularity: hondaColour, speedStats: hondaSpeed} = honda;
const [teslaTopSpeed, teslaZerotoSixty]= setCarsSpeed(teslaSpeed);
const [hondaTopSpeed, hondaZerotoSixty] = setCarsSpeed(hondaSpeed);
const [teslaTopColour, teslaNormalColour] = teslaColour;
const [hondaTopColour, hondaNormalColour] = hondaColour;
this will find everything needed
 
or we can use this function
const [honda,tesla] = cars;
const {speedStats:{topSpeed: teslaTopSpeed},coloursByPopularity:[teslaTopColour]} = tesla;
const {speedStats:{topSpeed: hondaTopSpeed},coloursByPopularity:[hondaTopColour]} = honda;


*/