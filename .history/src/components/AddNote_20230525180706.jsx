import React from 'react';
import *  as Yup from 'yup'
// Import Formik and Yup
import { Formik, Form, Field , ErrorMessage} from 'formik';
const AddNote = () => {
 
  // add form logic here
// const handleSubmit = (values)=>{
//    console.log(values)
// }
const initialValues = {
  title :"",

}
const  onSubmit =(values)=> {
 console.log(values)
}
const validationSchema  = Yup.object({
  title:Yup.string().required("Title is Required"),
  body:Yup.string().required("Body is Required")
})
  return (
    <div className='bg-gray-100 h-100  w-900'>
      <div className=' rounded-lg shadow '>
      <Formik 
     initialValues =  {initialValues}
     onSubmit = {onSubmit}
     validationSchema = {validationSchema}
      >
        <Form className='bg-gray-200 flex space-x-10 my-10 flex-col items-center justify-center'>
     <Field className='h-10  w-full  my-5 rounded-lg'  type="text" placeholder="Title" name ="title" />
     {/* <ErrorMessage name = "title"/> */}
   
    
     
     {/* <ErrorMessage name="body"/> */}

    <button  type="submit"> submit</button>

        </Form>
        
      </Formik>

      </div>
      
    </div>
  );
};

export default AddNote;
