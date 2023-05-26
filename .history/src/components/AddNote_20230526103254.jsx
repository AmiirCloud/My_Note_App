import React from 'react';
import *  as Yup from 'yup'
// Import Formik and Yup
import { Formik, Form, Field , ErrorMessage} from 'formik';
const AddNote = (props) => {

  // add form logic here
// const handleSubmit = (values)=>{
//    console.log(values)
// }

const initialValues = {
  title :"",
  content:""

}
const  onSubmit =(values)=> {
  props.createNote({
   title:  values.title,
   content:  values.content
  });
 
}
const validationSchema  = Yup.object({
  title:Yup.string().required("Title is Required"),
  content:Yup.string().required("Body is Required")
})
  return (
    <div className='bg-gray-100 h-100  w-full md:w-1/2  xs:w-1/5'>
      <div className=' rounded-lg shadow '>
      <Formik 
     initialValues =  {initialValues}
     validationSchema = {validationSchema}
     onSubmit = {onSubmit}
      >
        <Form className='bg-gray-200 flex p-5 flex-col space-y-5 my-10  '>
     <Field className='h-10 text-left-10  w-full  rounded-lg'  type="text" placeholder="Title" name ="title" />
     <div className='text-red-600 pl-2  border '>
     <ErrorMessage className='text-black text-red-600 pl-2  border border-red-1' name="title" component='div'/>

     </div>
     
     <Field className='h-10  w-full   rounded-lg'  type="text" placeholder="Body" name ="content" />
     <div className='text-red-600 pl-2  '>
     <ErrorMessage className='text-black' name="content" component='div'/>

     </div>
   
    
     

    <button  className='w-full bg-yellow-200 h-10 text-white ' type="submit"> submit</button>

        </Form>
        
      </Formik>

      </div>
      
    </div>
  );
};

export default AddNote;
