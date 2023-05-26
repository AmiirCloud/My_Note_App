import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function Notes(props) {
  const {notes}  = props;
    return (

    <div className="bg-yellow-900 text-black  rounded-lg w-1/5 h-40 my-5  ">
      {notes.map((note)=>(
        <div key={note.id}>
           <div className="text-black font-light my-2 ">
          <h1 className="text-3xl text-white pl-2 font-bold" >{note.title}</h1>
          <p className="my-4">{note.content}</p>
      
      </div>
      <div className="flex  justify-center items-end space-x-5 p-5 text-white">
        <button className="" ><FaTrash/></button>
        <button className="" ><FaEdit/></button>

      </div>

        </div>
      ))}


     
      
    
      { /* Style your note cards with Tailwind here and get the data from app.js */ }
    </div>
  );
}

export default Notes;