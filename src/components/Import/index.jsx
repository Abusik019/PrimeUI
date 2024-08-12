import styles from "./style.module.scss";
import CopyToClipboard from "react-copy-to-clipboard";
import doneIcon from '../../assets/done.svg';
import copyIcon from '../../assets/copy.png';
import { useState } from "react";

export const Import = ({ componentName }) => {
    const [copyBtn, setCopyBtn] = useState(copyIcon);

    return (
        <div className={styles.import}>
            <h1 className="import">Import</h1>
            <div className={styles.importContent}>
               <p><span>import</span>{`{ ${componentName} }`} <span>from</span> <span className={styles.greenMarker}> { `"@nextui-org/${componentName.toLowerCase()}";`}</span></p>
                <CopyToClipboard text={`import {${componentName}} from "@nextui-org/${componentName.toLowerCase()}"`}>
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
