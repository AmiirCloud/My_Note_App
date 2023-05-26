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
    <div className='bg-gray-100 h-100  w-90'>
      <div className=' rounded-lg shadow '>
      <Formik 
     initialValues =  {initialValues}
     onSubmit = {onSubmit}
     validationSchema = {validationSchema}
      >
        <Form className='bg-gray-200 flex  flex-col space-y-10  my-10  '>
     <Field className='h-10  w-full  rounded-lg'  type="text" placeholder="Title" name ="title" />
     <Field className='h-10  w-full   rounded-lg'  type="text" placeholder="Title" name ="title" />

     {/* <ErrorMessage name = "title"/> */}
   
    
     
     {/* <ErrorMessage name="body"/> */}

    <button  className='w-full bg-blue-200' type="submit"> submit</button>

        </Form>
        
      </Formik>

      </div>
      
    </div>
  );
};

export default AddNote;
