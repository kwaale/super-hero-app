import {Formik} from 'formik';
import Form from './Form';

const validation = (values)=>{
    console.log('funcion validation')
    let errors = {}
    if(values.email === ''){
        errors.email = 'Email no debe estar vacio'
    }
    if(values.passport === ''){
        errors.passport = 'Passport no debe estar vacio'
    }
    return errors
}
const BasicForm = ()=>{
    return (
    <div>
        <Formik
            initialValues={{email:"", passport:""}}
            onSubmit={(values,actions)=>{
                setTimeout(()=>{
                    console.log('values',values)
                    // console.log('values')
                    console.log('actions')
                    console.log(actions)
                    actions.setSubmitting(false)
                    actions.resetForm({values:{email:"",passport:""}})
                },1500);
            }}
            validate = {validation}
        >
            {(props)=>(<Form {...props}/>)}
        </Formik>

    </div>
    )
}
export default BasicForm;