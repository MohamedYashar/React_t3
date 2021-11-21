import {useFormik} from "formik"

// call validation if pass the call on submit
const formValidation = (values) => {
    const errors = {};
    console.log(" formValidation", values)

    // add validation email min 5 chars
    //  add validation email pattern

    if (values.password.length < 8) {
        errors.password = "please enter longer password"
    }

    return errors;
}


export function BasicForm () {
    
}