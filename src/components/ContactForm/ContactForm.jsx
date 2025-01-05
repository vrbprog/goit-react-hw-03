import { useState } from "react";
import s from "./ContactForm.module.css";

const INITIAL_STATE = {
    name: "",
    number: "",
};

const ControlledForm = ({ adder }) => {
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleSubmit = (e) => {
        e.preventDefault();

        adder(formData);
        setFormData(INITIAL_STATE); //🔥
    };

    const handleChangeInput = (e) => {
        const { name, value, type } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className={s.formWrapper}>
            <form onSubmit={handleSubmit} className={s.form}>
                <label className={s.label}>
                    <span>Name:</span>
                    <input
                        className={s.input}
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChangeInput}
                    />
                </label>

                <label className={s.label}>
                    <span>Number:</span>
                    <input
                        className={s.input}
                        type="text"
                        name="number"
                        value={formData.number}
                        onChange={handleChangeInput}
                    />
                </label>

                <button className={s.button} type="submit">
                    Add Contact
                </button>
            </form>
        </div>
    );
};
export default ControlledForm;
