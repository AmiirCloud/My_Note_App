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
    <div className=' '>
  
  <Formik 
     initialValues =  {initialValues}
     onSubmit = {onSubmit}
     validationSchema = {validationSchema}
      >
        <Form className='bg-green-900 flex space-x-10 my-10 flex-col justify-center'>
     <Field className='h-10  my-5 rounded-lg'  type="text" placeholder="Title" name ="title" />
     <ErrorMessage name = "title"/>
     <Field  className='h-10 rounded-lg' type="text" placeholder="Body"name = "body" 
    
     />
     <ErrorMessage name="body"/>

    <button  type="submit"> submit</button>

        </Form>
        
      </Formik>
      
    </div>
  );
};

export default AddNote;
