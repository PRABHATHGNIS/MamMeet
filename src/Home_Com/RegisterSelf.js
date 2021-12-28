import Button from '@mui/material/Button';
import { Form, Formik, Field } from 'formik'
import React from 'react'

const RegisterSelf = () => {
    return (
        <div>
            <div><h3>Register Free!!</h3></div>
            
            <Formik initialValues={{
                 EmailAddress: "",
                 CreatePassword:"..", }}
                 onSubmit={(values)=>{console.log(values)}}>




                <Form>

                    <label>EmailAddress</label>
                    <Field id="EmailAddress" name="EmailAddress" placeholder="Example@gmail.com" /><br></br>
                    {/* password field */}

                    <label>CreatePassword</label>
                    <Field id="CreatePassword" name="CreatePassword" placeholder="" />
                    {/* drop down for phone no */}
                    <br></br>
                    <div>
                       
                        
                    <label >ContactNo </label>        <select name="cars" id="cars">
                            <option value="India">India(+91)</option>
                            <option value="saab">SriLanka(+94)</option>
                            <option value="mercedes">Bangladesh(+880)</option>
                        </select>
                        <input name='number' type="number"></input>
                    </div>
                    <div>
                        <label htmlFor="MobileNo">PROFILE CREATING FOR </label>
                        <br></br>
                        <select id="PROFILE CREATING FOR">
                            <option >MALE</option>
                            <option >FEMALE</option>
                            <option >OTHER</option>
                        </select>



                    </div>

                    <div>
                        <input type="checkbox" name='checkbox' id="form2Example3cg" />
                        <label >
                            I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                        </label>
                    </div>

                    <Button variant="contained" type='OnSubmit'>SUBMIT</Button>

                    <p >Have already an account? <Button variant="contained" color="error">Login here</Button></p>
                </Form>
            </Formik>


        </div>
    )
} 

export default RegisterSelf;