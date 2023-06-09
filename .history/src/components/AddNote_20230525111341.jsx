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
        <form>
          <input type="text"/>
          <input type="text"/>
        </form>
        
      </Formik>
    </div>
  );
};

export default AddNote;
