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
  return (
    <div className='h-100  bg-red-900'>
     
      
      <Formik 
     initialValues =  {initialValues}

      >
        <Form className='bg-green-900'>
     <Field  type="text" placeholder="Title" />
     <Field  type="text" placeholder="Body" />

    <button type="submit"> submit</button>

        </Form>
        
      </Formik>
    </div>
  );
};

export default AddNote;
