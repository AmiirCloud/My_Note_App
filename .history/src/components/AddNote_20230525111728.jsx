import React from 'react';

// Import Formik and Yup
import { Formik, Form, Field , ErrorMessage} from 'formik';
const AddNote = () => {
 
  // add form logic here

  return (
    <div>
      <h2>helo</h2>
      { /* Add here your form and style it with Tailwind */ }
      <Formik>
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
