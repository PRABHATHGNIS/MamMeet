import React from 'react'
import Button from '@mui/material/Button';
import { Form, Formik, Field, ErrorMessage } from 'formik'
import * as yup from "yup";
import Kerror from './Home_Com/Kerror';

const validationSchema = yup.object({

    EmailAddress: yup.string().required("Required!"),
    MobileNo:yup.number().required(" Required"),
    CreatePassword:yup.string().required("Required")
});


const RegisterSelf = () => {
    return (
        <div>
            <div><h3>Register Free!!</h3></div>

            <Formik

                validationSchema={validationSchema}

                initialValues={{
                    EmailAddress: "",
                    CreatePassword:"",
                    MobileNo:"",
                    profilecreatingfor:"",
                    DateOfBirth:"",
                     
                }}>
                {/* WHAT WILL HAPPEN ON SUBMIT */}



                {/*  */}


                <Form>

                    <label>EmailAddress</label>
                    <Field name="EmailAddress" /* placeholder="Example@gmail.com" */ /><br></br>
                    <Kerror name="EmailAddress" />
                    {/* password field */}

                    <label >CreatePassword</label>
                    <Field name="CreatePassword" placeholder="" type="password" />
                    <Kerror name="CreatePassword"/>
                    {/* drop down for phone no */}
                    {/* <br></br> */}
                    <div>
                       
                    
                        {/* <br></br> */}
                        <label name="MobileNo">ContacNo </label>
                         <select name="dropdown">
                            <option value="India">India(+91)</option>
                            <option value="saab">SriLanka(+94)</option>
                            <option value="mercedes">Bangladesh(+880)</option>
                        </select>
                        
                        
                        <input type="number"></input>
                            <Kerror/>
                    </div>
                    <div>
                        <label >PROFILE CREATING FOR </label>
                        
                        {/* <br></br> */}
                        
                        <select name='profilecreatingfor'  >
                            <option >SELECT</option>
                            <option >MALE</option>
                            <option >FEMALE</option>
                            <option >OTHER</option>
                        </select>
                        <br></br>
                        <label>DateOfBirth</label>
                        <Field name="DateOfBirth" type="date"/>
                        <Kerror/>

                    </div>

                    <div>
                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                        <label className="form-check-label" for="form2Example3g">
                            I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                        </label>
                    </div>

                    <Button variant="contained">SUBMIT</Button>

                    <p >Have already an account? <Button variant="contained" color="error">Login here</Button></p>
                </Form>
            </Formik>


        </div>
    )
}

export default RegisterSelf;