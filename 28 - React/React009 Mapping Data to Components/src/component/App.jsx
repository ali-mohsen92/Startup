import React from "react";
import Cards from "./Cards";
import contacts from "../contacts";
import Avatar from "./Avatar";

function contactsmapping(contacts){
  return (<Cards
  key = {contacts.id}
  id = {contacts.id}
  name = {contacts.name}
  imgURL = {contacts.imgURL}
  phone = {contacts.phone}
  email = {contacts.email}
  />);
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar imgURL="https://miro.medium.com/max/750/0*QmxDMtQShSHGzC6v.jpg"/>
      {contacts.map(contactsmapping)}
     </div>
  );}


export default App;

/* 
function contactsmapping(contacts){
  return (<Cards
  key = {contacts.id}
  name = {contacts.name}
  imgURL = {contacts.imgURL}
  phone = {contacts.phone}
  email = {contacts.email}
  />);
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar imgURL="https://miro.medium.com/max/750/0*QmxDMtQShSHGzC6v.jpg"/>
      {contacts.map(contactsmapping)}
     </div>
  );}


export default App;
contacts.map(contactsmapping) will use a loop statement to function 
contactsmapping and find all the info,Key value is require for there
to be no errors

_____________________________________________________________
import React from "react";
import Cards from "./Cards";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar imgURL="https://miro.medium.com/max/750/0*QmxDMtQShSHGzC6v.jpg"/>
      <Cards 
      name= {contacts[0].name}
      imgURL={contacts[0].imgURL}
      phone={contacts[0].phone}
      email={contacts[0].email} />
      <Cards 
      name= {contacts[1].name}
      imgURL={contacts[1].imgURL}
      phone={contacts[1].phone}
      email={contacts[1].email} />
       <Cards 
      name= {contacts[2].name}
      imgURL={contacts[2].imgURL}
      phone={contacts[2].phone}
      email={contacts[2].email} />
     </div>
  );}


export default App;

This will import data from cards,contacts and avatar using props
to give the result of data in <Cards /> <Avatar />
*/