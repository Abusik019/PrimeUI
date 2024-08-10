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

    return (
        <div className={styles.installation}>
            <h1>Installation</h1>
            <ul className={styles.installationList}>
                <li onClick={() => setInstallChoice('npx nextui-cli@latest add ')}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABrUlEQVR4nO2YPUvDUBSGK6ibgouLi+7ugnRQW8FJHOzShvu+J0h/gIvVwcTN2dHZxbp0cNJJ/AMO4qqDdtGlToofkWCFa2ktJm0+9D7wwoXklPPk5qbJzWQMBoPBYPjLFAqFYZI7JOskvYhSB+CWy+Wh0AIAjiJs3GtJNWzzuRib9/wopeYDC5Dc7HVDAJ5IXv805vfzK2FmwO3DVd1XSk10GXuagJs0gWcAN13GXpIFfnvLuYEFRCQPYDfOiEg+sIAhbkQkS3IjzohI9v8uYhgBmhlABLdQQ0RmLMsaJ3mQxjVwrNeQXAfwkiaBhm3b0y11OQD3aRHwADwCWGmpnSR5mQoBfuYdwLZeT3I2TQIPJBf1ehFZTYUAgAvLsqb0WqXUsr8+mu/55wBO9bT7+mJMAte2bY9oZQMkHQBv/vFOr8OO4wySPItdAMDJ1/mlUmkUQE0/XiwWxzr9Psm92AVIvpLcIlkgedWmgRqAJX8m9JBc859eSRDoaxBGoB/bKgEEKmEEFhIgMBdYoClRjVHgMBMWf4O1+Vi8i7DxW/9fvSebuwaDwWAwZBLMB2arKsiaWALRAAAAAElFTkSuQmCC" />                
                    <h1>CLI</h1>
                </li>
                <li onClick={() => setInstallChoice('npm install @nextui-org/')}>
                    <img src={npm}/>
                    <h1>npm</h1>
                </li>
                <li onClick={() => setInstallChoice('yarn add @nextui-org/')}>
                    <img src={yarn}/>
                    <h1>yarn</h1>
                </li>
                <li onClick={() => setInstallChoice('pnpm add @nextui-org/')}>
                    <img src={pnpm}/>
                    <h1>pnpm</h1>
                </li>
                <li onClick={() => setInstallChoice('bun add @nextui-org/')}>
                    <img src={bun}/>
                    <h1>bun</h1>
                </li>
            </ul>
            <div className={styles.installationCode}>
                {installChoice}{componentName}
                <CopyToClipboard text={`${installChoice}${componentName}`}>
                    <button className={styles.copyButton} onClick={() => {
                        setCopyBtn(doneIcon)
                        setTimeout(() => {
                            setCopyBtn(copyIcon)
                        }, 2000)
                    }}>
                        <img src={copyBtn} alt="Copy icon" />
                    </button>
                </CopyToClipboard>
            </div>
        </div>
    )
}
