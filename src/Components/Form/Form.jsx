// import { ErrorMessage, validateYupSchema } from "formik";

const Form = (props)=>{
    const {
        handleSubmit, handleChange, values, errors, touched
    } = props;
    // console.log('handleChange',handleChange)
    console.log('props',props)
    console.log('values',values)

    return(
        <form onSubmit={handleSubmit}>
            <label>Email:<input
            type='email'
            name='email'
            onChange={handleChange}
            value={values.email}
            />
            {errors.email && touched.email && errors.email}
            </label><br/>
            <label>Passport:<input
            type='passport'
            name='passport'
            onChange={handleChange}
            value={values.passport}
            />
            {errors.passport && touched.passport && errors.passport}
            </label><br/>
            <input type='submit' value='Send'/>
        </form>
    )
}
export default Form;
