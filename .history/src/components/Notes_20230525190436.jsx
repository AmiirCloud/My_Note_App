import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function Notes(props) {
  return (
    <div className="bg-yellow-900 text-black  rounded-lg w-1/5 h-40   ">
      <div className="text-black font-light my-2 ">
        <h1 className="text-3xl text-white pl-2 font-bold" >The Title of the NOte</h1>
        <p className="space">Lorem ipsum dolor sit amet.</p>
      </div>
      <div>

      </div>
    
      { /* Style your note cards with Tailwind here and get the data from app.js */ }
    </div>
  );
}

export default Notes;