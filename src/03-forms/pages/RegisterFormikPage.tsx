import  '../styles/styles.css';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {


    const validationSchema =  () => 
        Yup.object({
            name:   Yup.string()
                        .min(2,'Debe tener al menos 2 caracteres')
                        .max(15,'Debe tener un máximo de 15 caracteres')
                        .required('Requerido'),
            email:  Yup.string()
                        .min(6,'Debe de tener un mínimo de 6 caracteres')
                        .email('Formato de email inválido')
                        .required('Debe ingresar email'),
            password1: Yup.string()
                        .required('Este campo es necesario')
                        .min(6,'Mínimo 6 caracteres'),
            password2: Yup.string()
                        .required('Este campo es necesario')
                        .min(6,'Mínimo 6 caracteres')
                        .oneOf([Yup.ref('password1'), null], 'Contraseña no coincide')
        })

    return (
        <div>
            <h1>Register Formik Page</h1>            
        <Formik
            initialValues={{
                name: '',
                email: '',
                password1: '',
                password2: ''
            }} 
            onSubmit={(values) => {
                console.log(values);
            }}
            validationSchema={ validationSchema }
            
        >
            {
                ({handleReset}) => (
                    <Form>
                        <MyTextInput 
                                label="First Name" 
                                name="name"
                                placeholder="Francisco"
                        />
                        <MyTextInput 
                                label="Email Address" 
                                name="email"
                                placeholder="Francisco@gmail.com"
                        />
                        <MyTextInput 
                                label="Password" 
                                name="password1"
                                type='password'
                        />
                        <MyTextInput 
                                label="Repeat Password" 
                                name="password2"
                                type='password'
                        />
                    <button type="submit">Create</button>
                    <button onClick={ handleReset }>Reset Form</button>

                    </Form>
                )
            }


        </Formik>


            
        </div>
    )
}
