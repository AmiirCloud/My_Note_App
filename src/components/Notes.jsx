import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
function Notes(props) {
  const {notes,deleteNote}  = props;

    return (
    <div className="  flex flex-wrap space-y-2 md:space-y-3 justify-center rounded-lg w-full  h-auto  ">
      {notes.map((note)=>{
        return(
          <div key={note.id}  className= 'p-10 flex justify-center  m-2  md:w-1/4  bg-yellow-800 p-5  text-gray-200 rounded-lg bg-red-900  '>
                    <div className="text-black font-light my-2 text-gray-200 ">
                       <h1 className="text-3xl  pl-2 font-bold" >{note.title}</h1>
                        <p className="my-4">{note.content}</p>
                  
                   </div>
                   <div className="flex justify-end  p-10   space-x-5 p-5 text-gray-200 sm:w-1/2">
                        <button className="" onClick={()=>{
                        deleteNote(note.id)
                         }}  ><FaTrash/></button>
                        <button className="" ><FaEdit/></button>
        
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