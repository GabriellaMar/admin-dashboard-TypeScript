import styles from '../../../pages/LoginPage/LoginPage.module.scss';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';
import { IoEyeOffOutline } from "react-icons/io5";



const initialValues = {
    email: '',
    password: '',
};



const emailRegexp: RegExp = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9_-]+).([a-zA-Z]{2,5})$/;
const passwordRegexp: RegExp = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;

const schema = yup.object().shape({
    email: yup.string()
        .matches(emailRegexp,
            'Enter your email in format "example@ukr.net"',)
        .required('Email is required'),
    password: yup.string()
        .min(6, 'Password must be at least 6 characters')
        .matches(passwordRegexp, 'Password must contain letters and digits')
        .required('Password is required'),
});


export const LoginForm = () => {


    const handleLogInSubmit = (values: any) => {
        // const { email, password } = values;

       console.log(values)
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            validateOnChange={true}
            validateOnBlur={true}
            onSubmit={handleLogInSubmit}
        >
            {({ values, touched}) => (
                 <Form className={styles.form}>
                    <div className={styles.inputWrapper}>
                    <Field
                        type="email"
                        id="email"
                        name="email"
                        // value={values.email}
                        placeholder="Email address"
                        autoComplete="off"
                        className={styles.loginInput}
                    />

                        <ErrorMessage name="email" component="div" className={styles.errorMessage} />
                  
                    <Field
                        type="password"
                        id="password"
                        name="password"
                        // value={values.password}
                        placeholder="Password"
                        autoComplete="off"
                        className={styles.loginInput}
                        
                    />
                    {touched.password && values.password && <IoEyeOffOutline className={styles.eyeIcon} />}

                    <ErrorMessage name="password" component="div" className={styles.errorMessage} />
                    </div>
                  
                    <button type='submit'>Log in</button>
                </Form>
            )}
        </Formik>
    )
}