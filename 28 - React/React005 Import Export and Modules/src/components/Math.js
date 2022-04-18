import React from "react";

const pi = 3.14;

function doublePI(){
    return (pi*2);
}
function triplePI(){
    return (pi*3);
}
export default pi;
export {doublePI,triplePI};

/* 
const pi = 3.14;

function doublePI(){
    return (pi*2);
}
function triplePI(){
    return (pi*2);
}
export default pi;
export {doublePI,triplePI};
we can export more than one function but only default can be of different name in 
import function
*/