import React from 'react';
import *  as Yup from 'yup'
// Import Formik and Yup
import { Formik, Form, Field , ErrorMessage} from 'formik';
const AddNote = (props) => {
console.log("props",props)
  // add form logic here
// const handleSubmit = (values)=>{
//    console.log(values)
// }

const initialValues = {
  title :"",
  content:""

}
// a funciton that clear the textBox vlues when submited the form
const clearText  =  (values)=>{
 values.title  =  "";
 values.content  = "";
}
const  onSubmit =(values)=> {
  props.createNote({
   title:  values.title,
   content:  values.content
  });
 clearText(values)// clearing text
  
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
     <Field className='h-10 text-left-10  w-full  rounded-lg' id="title-id"  type="text" placeholder="Title" name ="title" />
     
     <ErrorMessage className='text-black text-red-600 pl-2  border border-red-1' name="title" component='div'/>

   
     
     <Field className='h-10  w-full   rounded-lg'  type="text" placeholder="Body" name ="content" />
     
     <ErrorMessage className='text-red text-red-600 pl-2  border border-red-' name="content" component='div'/>

     
   
    
     
     <button  className='w-full bg-green-900 h-10 text-white ' onClick={()=>{
      setFieldValue("title","")
     }} type="button"> cleart Text</button>

    <button  className='w-full bg-green-900 h-10 text-white ' type="submit"> submit</button>

        </Form>
        
      </Formik>

      </div>
      
    </div>
  );
};

export default AddNote;
