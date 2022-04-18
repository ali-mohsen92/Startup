import React from 'react';
import FooterYear from './Footer';
import HeaderBody from './Header';
import NoteContent from './Note';
import notes from '../notes';


function App(){
    return (<div> <HeaderBody/> {notes.map(note => <NoteContent
        key={note.key} title={note.title} content={note.content}/>)} <FooterYear /> </div>);
}
export default App;


/* 
return (<div> <HeaderBody/> {notes.map(note => <NoteContent
         key={note.key} title={note.title} content={note.content}/>)} <FooterYear /> </div>);
}
*/