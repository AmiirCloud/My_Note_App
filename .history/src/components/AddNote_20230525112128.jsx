import React from 'react';

// Import Formik and Yup
import { Formik, Form, Field , ErrorMessage} from 'formik';
const AddNote = () => {
 
  // add form logic here
      const initialValues =  {
        title:"",
        body:""
      }
      const handleSubmit = (event)=>{
        console.log(event.target.value)
      }
  return (
    <div>
      <h2>afjlasjdflasjdflklj</h2>
      { /* Add here your form and style it with Tailwind */ }
      <Formik>
        initialValues ={initialValues}
        onSubmit  = {handleSubmit}
        <Form>
          <Field type="text" name="title"/>
          <Field type="text" name="body"/>
        </Form>
        <button type="submit"></button>
        
      </Formik>
    </div>
  );
};

export default AddNote;
