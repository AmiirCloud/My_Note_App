import React from 'react';
import *  as Yup from 'yup'
// Import Formik and Yup
import { Formik, Form, Field , ErrorMessage} from 'formik';
import {useState}  from 'react'
import { useDispatch } from 'react-redux';
import {  editNote, fetchNOtes } from '../Store/api/NotesSlice';
import {useNavigate , useParams} from 'react-router-dom'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const EditNote = () => {
    
const dispatch  = useDispatch()
const  navigate =  useNavigate();
const [currentValue ,setCurrentValue] =  useState({})
const notes   = useSelector((state)=>state.note.notes)
const params   = useParams();
// a funciton that clear the textBox vlues when submited the form
useEffect(()=>{
    dispatch(fetchNOtes())
},[dispatch])

useEffect(()=>{
    if(notes.length) {
          const note   = notes.find((note)=>note.id === Number(params.id))
          setCurrentValue(note)
    }
},[notes,params.id])

const initialValues = {
    title :currentValue.title,
    content:currentValue.content
  }
const validationSchema  = Yup.object({
  title:Yup.string().required("Title is Required"),
  content:Yup.string().required("Body is Required")
})

 
  const handleSubmit = (values, { resetForm }) => {
  dispatch(editNote({
    updateNoteId:values,

    id:Number(params.id),
    
  })).then(()=>{
    navigate("/")
    window.location.reload();
  })
  resetForm();
  };
  return (
    <div className='bg-gray-100 h-100  w-full md:w-1/2  xs:w-1/5'>
      <div className=' rounded-lg shadow '>
      <Formik 
      enableReinitialize
     initialValues={initialValues}
     validationSchema={validationSchema}
     onSubmit={handleSubmit}
      >
        <Form className='bg-gray-200 flex p-5 flex-col space-y-5 my-10  '>
     <Field className='h-10 text-left-10  w-full  rounded-lg' id="title-id"  type="text" placeholder="Title" name ="title" />
     
     <ErrorMessage className='text-black text-red-600 pl-2  border border-red-1' name="title" component='div'/>

   
     
     <Field className='h-10  w-full   rounded-lg'  type="text" placeholder="Body" name ="content" />
     
     <ErrorMessage className='text-red text-red-600 pl-2  border border-red-' name="content" component='div'/>

     
   
    
  

    <button  className='w-full bg-green-900 h-10 text-white ' type="submit"> submit</button>

        </Form>
        
      </Formik>

      </div>
      
    </div>
  );
};

export default EditNote;
