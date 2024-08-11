import styles from "./style.module.scss";
import copyBtn from "../../assets/copy.png";
import CopyToClipboard from "react-copy-to-clipboard";
import doneIcon from '../../assets/done.svg';
import copyIcon from '../../assets/copy.png';
import { useState } from "react";

export const Import = ({ componentName }) => {
    const [copyBtn, setCopyBtn] = useState(copyIcon);

    return (
        <div className={styles.import}>
            <h1>Import</h1>
            <div className={styles.importContent}>
                {componentName}
                <CopyToClipboard text={`${componentName}`}>
                    <button
                        className={styles.copyButton}
                        onClick={() => {
                            setCopyBtn(doneIcon);
                            setTimeout(() => {
                                setCopyBtn(copyIcon);
                            }, 2000);
                        }}
                    >
                        <img src={copyBtn} alt="Copy icon" />
                    </button>
                </CopyToClipboard>
            </div>
        </div>
    );
};
