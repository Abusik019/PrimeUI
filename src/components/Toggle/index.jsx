import styles from "./style.module.scss";

const Toggle = ({ value, onChange }) => {

    return (
        <label className={styles.root} htmlFor="toggler">
            <input
                id="toggler"
                type="checkbox"
                onClick={onChange}
                checked={value}
                readOnly
                className={styles.input}
            />
            <span className={styles.slider} />
            <span className={styles.wave} />
        </label>
    );
};

export default Toggle;
