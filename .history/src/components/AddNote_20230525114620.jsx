import React from 'react';

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
 console.log("haldfaldfjdl")
}
  return (
    <div className='h-100  bg-red-900'>
     
      
      <Formik 
     initialValues =  {initialValues}
     onSubmit = {onSubmit}
      >
        <Form className='bg-green-900'>
     <Field  type="text" placeholder="Title" name ="title" />
     <Field  type="text" placeholder="Body"name = "body" />

    <button type="submit"> submit</button>

        </Form>
        
      </Formik>
    </div>
  );
};

export default AddNote;
