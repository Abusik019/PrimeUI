import styles from "./style.module.scss";
import CopyToClipboard from "react-copy-to-clipboard";
import doneIcon from '../../assets/done.svg';
import copyIcon from '../../assets/copy.png';
import { useState } from "react";

export const Import = ({ title, content, list, description }) => {
    console.log(list);
    const [copyBtn, setCopyBtn] = useState(copyIcon);

    return (
        <div className={styles.import}>
            <h1 className="import">{title}</h1>
            <p>{description}</p>
            <ul className={styles.importList} style={{flexDirection: list.direction === "column" ? "column" : "row"}}>
                {list.items.map((item, index) => (
                    <li key={index}>
                        <h1>{item.name}:</h1>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
            <div className={styles.importContent}>
                <h1>{content}</h1>
                <CopyToClipboard text={content}>
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
