import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const Signup = () => {

  return (
    <Formik
      initialValues={{
        accountNo: '',
        amount: ''
      }}
      onSubmit={(data)=>{
        alert(JSON.stringify(data))    
      
      }}
    >
      <Form>
        <Field type="text" name="accountNo" />
        <button type="submit">Submit</button>
      </Form>

    </Formik>
  )
}
