import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import {deleteNote, fetchNOtes} from '../Store/api/NotesSlice'
import {useSelector,useDispatch} from 'react-redux' 
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Notes() {
  const dispathc =  useDispatch();
  useEffect(()=>{
    dispathc(fetchNOtes())
  },[dispathc])

  
  const handleClick  = (id)=>{
    dispathc(deleteNote(id))
  }
  const note  =  useSelector((state)=>state)
  
    return (
      <div className="p-5   md:max-w-2xl md:flex flex-wrap lg:max-w-2xl lg:max-w-full lg:grid lg:grid-cols-3 lg:p-10 2xl:grid-cols-4 lg:space-x-8 lg-rounded-2xl ">
      {note.note.notes.map((note) => {
        return (
          <div key={note.id} className='w-full ml-2 sm:max-w-full  p-10 md:bg-red-900 m-10 md:max-w-[40%] bg-yellow-800 text-gray-200 rounded-lg bg-red-900 lg:max-w-full lg:ml-10 lg:mb-8 lg:bg-green-900 lg:mt-10'>
            <div className="text-black font-light my-2 text-gray-200">
              <h1 className="text-3xl pl-2 font-bold">{note.title}</h1>
              <p className="my-4">{note.content}</p>
            </div>
            <div className="flex justify-end p-10 space-x-5 p-5 text-gray-200 sm:w-1/2">
              
              <button className="" onClick={()=>handleClick(note.id)} ><FaTrash/></button> 
             

              <Link to={`edit_Note/${note.id}`}>
              <button className=""><FaEdit/></button>

              </Link>
              
            </div>
          </div>
        );
      })}
    </div>
    )
}

export default Notes;

// 
// Breakpoint prefix	Minimum width	CSS
// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl	1536px	@media (min-width: 1536px) { ... }