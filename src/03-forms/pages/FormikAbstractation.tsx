import {   Formik , Form  } from 'formik'
import * as Yup from 'yup'
import { MyCheckbox, MySelect, MyTextInput } from '../components'

// import { MyCheckbox } from '../components/MyCheckbox'
// import { MySelect } from '../components/MySelect'
// import { MyTextInput } from '../components/MyTextInput'

import '../styles/styles.css'

export const FormikAbstractation = () => {

    

    return (
        <div>
            <h1>Formik FormikAbstractation</h1>

            <Formik
                initialValues={{firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: '',
                
                }}
                onSubmit={( values ) => {
                    console.log(values);
                }}
                validationSchema={
                        Yup.object({
                            firstName: Yup.string()
                                                .max(15,'Debe de temer 15 caracteres o menos')
                                                .required('Requerido'),
                            lastName: Yup.string()
                                            .max(15, 'Debe de temer 15 caracteres o menos')
                                            .required('Requerido'),
                            email:    Yup.string()
                                            .email('Formato de email inválido')
                                            .required('requerido'),
                            terms:    Yup.boolean()
                                            .oneOf([true],"Debe de aceptar las condiciones"),
                            jobType:  Yup.string()
                                              .required("Requerido")
                                              .notOneOf(['it-jr'],'Esta opción no es permitida.')
                
                
                        })
                    }
                

            >

            {
                (formik) => (
                        <Form>
                            <MyTextInput 
                                label="First Name" 
                                name="firstName"
                                placeholder="Francisco"
                            />

                            <MyTextInput 
                                label="Last Name" 
                                name="lastName"
                                placeholder="Zelada"
                            />

                            <MyTextInput 
                                label="Email Address" 
                                name="email"
                                placeholder="fra.zelada.s@gmail.com"
                                type='email'
                            />

                            <MySelect label="Job Type" name="jobType" >
                                <option value="">Pick Something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">IT Jr.</option>
                            </MySelect>

                            <MyCheckbox label="Terms and Conditions" name="terms"/>

                            
                            <button type="submit">Submit</button>

                        </Form>
                )
            }
            </Formik>

        </div>
    )
}
