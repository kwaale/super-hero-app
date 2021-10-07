import { ErrorMessage, validateYupSchema } from "formik";

const Form = ({handleSubmit, handleChange, values})=>{
    return(
        <form onSubmit={handleSubmit}>
            <label>Email:<input
            type='email'
            name='email'
            onChange={handleChange}
            // value={values.emai}
            />
            {/* {error.email && touched.email && errors.email} */}
            </label><br/>
            <label>Passport:<input
            type='email'
            name='email'
            onChange={handleChange}
            // value={values.emai}
            />
            {/* {error.email && touched.email && errors.email} */}
            </label><br/>
            <input type='submit' value='Send'/>
        </form>
    )
}
export default Form;
