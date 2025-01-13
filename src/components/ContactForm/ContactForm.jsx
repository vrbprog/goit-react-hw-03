
import s from "./ContactForm.module.css";
import { Field, Form, Formik } from "formik";

const INITIAL_STATE = {
    name: "",
    number: "",
};

const ContactForm = ({ adder }) => {
    const handleSubmit = (value, actions) => {
        adder(value);
        actions.resetForm();
    };

    return (
        <div className={s.formWrapper}>
            <Formik onSubmit={handleSubmit} initialValues={INITIAL_STATE}>
                <Form className={s.form}>
                    <label className={s.label}>
                        <span>Name:</span>
                        <Field className={s.input} type="text" name="name" />
                    </label>

                    <label className={s.label}>
                        <span>Number:</span>
                        <Field className={s.input} type="text" name="number" />
                    </label>

                    <button className={s.button} type="submit">
                        Add Contact
                    </button>
                </Form>
            </Formik>
        </div>
    );
};
export default ContactForm;
