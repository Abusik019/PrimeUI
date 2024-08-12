import styles from './style.module.scss';
import npm from '../../assets/npm.svg';
import yarn from '../../assets/yarn.png';
import pnpm from '../../assets/pnpm.svg';
import bun from '../../assets/Bun.svg';
import copyIcon from '../../assets/copy.png'; 
import doneIcon from '../../assets/done.svg';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard'; 

export const Installation = ({ componentName }) => {
    const [installChoice, setInstallChoice] = useState('npx nextui-cli@latest add ');
    const [copyBtn, setCopyBtn] = useState(copyIcon);
    const [activeIndex, setActiveIndex] = useState(0);

    const installationOptions = [
        { command: 'npx nextui-cli@latest add ', img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABrUlEQVR4nO2YPUvDUBSGK6ibgouLi+7ugnRQW8FJHOzShvu+J0h/gIvVwcTN2dHZxbp0cNJJ/AMO4qqDdtGlToofkWCFa2ktJm0+9D7wwoXklPPk5qbJzWQMBoPBYPjLFAqFYZI7JOskvYhSB+CWy+Wh0AIAjiJs3GtJNWzzuRib9/wopeYDC5Dc7HVDAJ5IXv805vfzK2FmwO3DVd1XSk10GXuagJs0gWcAN13GXpIFfnvLuYEFRCQPYDfOiEg+sIAhbkQkS3IjzohI9v8uYhgBmhlABLdQQ0RmLMsaJ3mQxjVwrNeQXAfwkiaBhm3b0y11OQD3aRHwADwCWGmpnSR5mQoBfuYdwLZeT3I2TQIPJBf1ehFZTYUAgAvLsqb0WqXUsr8+mu/55wBO9bT7+mJMAte2bY9oZQMkHQBv/vFOr8OO4wySPItdAMDJ1/mlUmkUQE0/XiwWxzr9Psm92AVIvpLcIlkgedWmgRqAJX8m9JBc859eSRDoaxBGoB/bKgEEKmEEFhIgMBdYoClRjVHgMBMWf4O1+Vi8i7DxW/9fvSebuwaDwWAwZBLMB2arKsiaWALRAAAAAElFTkSuQmCC', label: 'CLI' },
        { command: 'npm install @nextui-org/', img: npm, label: 'npm' },
        { command: 'yarn add @nextui-org/', img: yarn, label: 'yarn' },
        { command: 'pnpm add @nextui-org/', img: pnpm, label: 'pnpm' },
        { command: 'bun add @nextui-org/', img: bun, label: 'bun' },
    ];

    const handleClick = (index, command) => {
        setActiveIndex(index);
        setInstallChoice(command);
    };

    return (
        <div className={styles.installation}>
            <h1 className='installation'>Installation</h1>
            <ul className={styles.installationList}>
                {installationOptions.map((option, index) => (
                    <li
                        key={index}
                        className={index === activeIndex ? styles.active : ''}
                        onClick={() => handleClick(index, option.command)}
                    >
                        <img src={option.img} alt={option.label} />
                        <h1>{option.label}</h1>
                    </li>
                ))}
            </ul>
            <div className={styles.installationCode}>
                {installChoice}{componentName}
                <CopyToClipboard text={`${installChoice}${componentName}`}>
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
