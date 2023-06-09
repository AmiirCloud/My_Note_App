import React from 'react';

// Import Formik and Yup
import { Formik, Form, Field , ErrorMessage} from 'formik';
const AddNote = () => {
 
  // add form logic here
const handleSubmit = (event)=>{
   console.log(event.target.value)
}
  return (
    <div className='h-40'>
      <h2>helo</h2>
      { /* Add here your form and style it with Tailwind */ }
      <Formik>
        <Form>
    <Field 
    type="text"
    name="title"
    >
    </Field>
    <button type="submit"> submit</button>

        </Form>
        
      </Formik>
    </div>
  );
};

export default AddNote;
