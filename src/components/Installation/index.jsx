import styles from './style.module.scss';
import copyIcon from '../../assets/copy.png'; 
import doneIcon from '../../assets/done.svg';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard'; 

export const Installation = ({ title, description, text, list }) => {
    const [installChoice, setInstallChoice] = useState(list.items[0].text);
    const [copyBtn, setCopyBtn] = useState(copyIcon);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index, command) => {
        setActiveIndex(index);
        setInstallChoice(command);
    };

    return (
        <div className={styles.installation}>
            <h1 className='installation'>{title}</h1>
            {description && <p>{description}</p>}
            <ul className={styles.installationList}>
                {list.items && list.items.map((item, index) => (
                    <li
                        key={index}
                        className={index === activeIndex ? styles.active : ''}
                        onClick={() => handleClick(index, item.text)}
                    >
                        <img src={item.image} alt={item.name} />
                        <h1>{item.name}</h1>
                    </li>
                ))}
            </ul>
            <div className={styles.installationCode}>
                {installChoice}
                <CopyToClipboard text={`${installChoice}`}>
                    <button className={styles.copyButton} onClick={() => {
                        setCopyBtn(doneIcon);
                        setTimeout(() => {
                            setCopyBtn(copyIcon);
                        }, 2000);
                    }}>
                        <img src={copyBtn} alt="Copy icon" />
                    </button>
                </CopyToClipboard>
            </div>
        </div>
    );
};
