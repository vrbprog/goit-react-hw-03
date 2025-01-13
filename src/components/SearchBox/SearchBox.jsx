
import s from "./SearchBox.module.css";

export default function SearchBox() {

    return (
        <div>
            <label className={s.label}>
                <span>Find contacts by name:</span>
                <input className={s.input} type="text" name="name" />
            </label>
        </div>
    );
};
