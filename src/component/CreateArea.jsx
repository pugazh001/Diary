import React, { useState } from "react";
import AddCommentTwoToneIcon from '@mui/icons-material/AddCommentTwoTone';
// import Zoom from '@mui/material/Zoom';
function CreateArea(prop){

    const[note,setNote]=useState({
        title:"",
        content:""
    })

    function  handleChange(event){

      const {name,value}=event.target

      setNote(prevNote=>{
        return{
            ...prevNote,
            [name]:value
        }
      })
    }
    function submitNote(event){
        prop.onAdd(note);
        setNote(
            {
                title:"",
                content:""
            }
        )
        event.preventDefault();
    }
  return(
     <div>
       <form className="create-note">
         <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={note.title} />
         <textarea
          name="content"
           value={note.content}
           onChange={handleChange}
            placeholder="TaKe a note..." 
            rows="3" />
            
         <button  onClick={submitNote}><AddCommentTwoToneIcon /></button>
       
         </form>
     </div>
  );
}
export default CreateArea;