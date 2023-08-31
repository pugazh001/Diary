import React, { useState } from "react";
import CreateArea from "./CreateArea";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App(){

  const [notes,setNote]=useState([]);

  function addNote(newNote){
    //console.log(note);
    setNote(preNote =>{
      return [...preNote,newNote];
    })
  }

  function deleteNote(id){

    // console.log("delete");
    setNote(preNote=>{
      return  preNote.filter((noteItem,index)=>{
        return index !== id;
      })
    })
  }

  return(
     <div>
        <Header /> 
        <CreateArea
        onAdd={addNote}
        />
        {notes.map((noteItem,index) =>{
          return <Note 
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />;
        })}
        <Footer />

     </div>
  )
}
export default App;