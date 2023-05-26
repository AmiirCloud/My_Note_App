import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function Notes(props) {
  const {notes}  = props;
    return (

    <div className="bg-yellow-900 text-black  rounded-lg w-1/5 h-40 my-5  ">
      {notes.map((note)=>(
        <div key={note.id}>
           <div className="text-black font-light my-2 ">
          <h1 className="text-3xl text-white pl-2 font-bold" >The Title of the NOte</h1>
          <p className="my-4">Lorem ipsum dolor sit amet.</p>
      </div>

        </div>
      ))}


     
      
    
      { /* Style your note cards with Tailwind here and get the data from app.js */ }
    </div>
  );
}

export default Notes;