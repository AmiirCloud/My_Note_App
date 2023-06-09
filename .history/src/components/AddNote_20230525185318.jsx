import React from 'react';
import *  as Yup from 'yup'
// Import Formik and Yup
import { Formik, Form, Field , ErrorMessage} from 'formik';
const AddNote = (props) => {
 const {notes,setNotes} =  props;
  // add form logic here
// const handleSubmit = (values)=>{
//    console.log(values)
// }

const initialValues = {
  title :"",
  body:""

}
const  onSubmit =(values)=> {
  setNotes()
 
}
const validationSchema  = Yup.object({
  title:Yup.string().required("Title is Required"),
  body:Yup.string().required("Body is Required")
})
  return (
    <div className='bg-gray-100 h-100  w-1/2'>
      <div className=' rounded-lg shadow '>
      <Formik 
     initialValues =  {initialValues}
     onSubmit = {onSubmit}
     validationSchema = {validationSchema}
      >
        <Form className='bg-gray-200 flex p-5 flex-col space-y-5 my-10  '>
     <Field className='h-10 text-left-10  w-full  rounded-lg'  type="text" placeholder="Title" name ="title" />
     <div className='text-red-600 pl-2  border '>
     <ErrorMessage className='text-black' name="title"/>

     </div>
     
     <Field className='h-10  w-full   rounded-lg'  type="text" placeholder="Body" name ="body" />
     <div className='text-red-600 pl-2  '>
     <ErrorMessage className='text-black' name="body"/>

     </div>
   
    
     

    <button  className='w-full bg-yellow-200 h-10 text-white ' type="submit"> submit</button>

        </Form>
        
      </Formik>

      </div>
      
    </div>
  );
};

export default AddNote;
