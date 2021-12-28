import React from 'react'
import { ErrorMessage } from 'formik'


const Kerror = ({EmailAddress}) => {
    return (
        <div style={{color:'red'}}>
            <ErrorMessage name="EmailAddress"  />
        </div>
    )
}



export default Kerror;
