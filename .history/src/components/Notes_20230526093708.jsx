import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function Notes(props) {
  
  const {notes,deleteNote}  = props;


 
    return (

    <div className="bg-yellow-900 text-black  flex rounded-lg w-1/5 h-auto my-5  ">
      {notes.map((note)=>{
        return(
          <div key={note.id}  className='flex space-x-5s '>
          <div>
          <div className="text-black font-light my-2 text-gray-200 ">
           <h1 className="text-3xl  pl-2 font-bold" >{note.title}</h1>
           <p className="my-4">{note.content}</p>
       
       </div>
       <div className="flex  justify-center items-end space-x-5 p-5 text-gray-200">
         <button className="" onClick={()=>{
          deleteNote(note.id)
         }}  ><FaTrash/></button>
         <button className="" ><FaEdit/></button>
 
       </div>
          </div>
 
         </div>
        )
      }
      
      )}


     
      
    
      { /* Style your note cards with Tailwind here and get the data from app.js */ }
    </div>
  );
}

export default Notes;