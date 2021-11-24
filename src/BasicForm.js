import {useFormik} from "formik"

import * as yup from 'yup';

// call validation if pass the call on submit
const formValidation = (values) => {
    const errors = {};
    console.log("formValidation", values)

    // add validation email min 5 chars
    //  add validation email pattern
    if (values.email.length < 5) {
        errors.email = "please enter longer email"
    }else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'please enter valid email address';
      }

    if (values.password.length < 8) {
        errors.password = "please enter longer password"
    }else if (values.password.length > 12){
        errors.password = "please enter shorter password"
    }

    return errors;
}

const formValidationSchema = yup. object({
    email: yup.string().min(5).required(),
    password: yup.string().min(8).max(12).required(),
})

export function BasicForm () {

    const {handleSubmit,values, handleChange,handleBlur, errors, touched} = useFormik({
        initialValues: {email: "yash@", password : ""},
        // validate:formValidation,
        validationSchema : formValidationSchema,
        onSubmit: (values) => {
            console.log ("onSubmit", values)
        }
    })
    
    return (
    
        <form onSubmit ={handleSubmit}>
            <input 
            id = "email"
            name="email"
            value = {values.email}
            onChange ={handleChange}
            onBlur={handleBlur}
            type="email"
            placeholder="please enter your email"
            />
            {errors.email && touched.email ? errors.email : "" }
            <input
            id = "password "
            name="password"
            value = {values.password}
            onChange ={handleChange}
            onBlur={handleBlur}
            type="password"
            placeholder="please enter your password"
            />
            {errors.password && touched.password ? errors.password : ""}
            <button type ="submit" > submit</button>
        </form>
        
    )
}