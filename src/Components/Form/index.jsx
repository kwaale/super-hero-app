import {Formik} from 'formik';
import Form from './Form';
import { useDispatch,useSelector } from 'react-redux';
import { login } from '../../actions'

const validation = (values)=>{
    let errors = {}
    if(values.email === ''){
        errors.email = 'Email no debe estar vacio'
    }
    if(values.password === ''){
        errors.password = 'Password no debe estar vacio'
    }
    return errors
}
const BasicForm = ()=>{
    const dispatch = useDispatch();
    return (
    <div>
        <Formik
            initialValues={{email:"", password:""}}
            onSubmit={(values,actions)=>{
                setTimeout(()=>{
                    actions.setSubmitting(false)
                    actions.resetForm({values:{email:"",password:""}})
                    dispatch(login(values));
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