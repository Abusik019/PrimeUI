import { useState } from "react";
import styles from "./style.module.scss";
import CodeDisplay from '../CodeDisplay/index';

function InputAvatar({ componentInfo }) {
    const [imageUrl, setImageUrl] = useState('');
    const [whichContentShow, setWhichContentShow] = useState('view');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setImageUrl(url);
        }
    };

    return (
        <div className={styles.avatarElement}>
            <h1>Example</h1>
            <div className={styles.btnContainer}>
                <button 
                    className={styles.btnReview}
                    onClick={() => setWhichContentShow('view')}
                    style={{backgroundColor: whichContentShow === 'view' ? '#c9c7c7' : '#e1e1e1'}}
                >Review</button>
                <button 
                    className={styles.btnCode}
                    onClick={() => setWhichContentShow('code')}
                    style={{backgroundColor: whichContentShow === 'code' ? '#c9c7c7' : '#e1e1e1'}}
                    >Code</button>
            </div>
            {whichContentShow === 'view' ? (
               <>
                <input
                    type="file"
                    id="avatarInput"
                    className={styles.inputFile}
                    onChange={handleFileChange}
                    />  
                    <label htmlFor="avatarInput" className={styles.uploadButton}>
                        {imageUrl ? (
                            <img src={imageUrl} alt="Selected Avatar" className={styles.avatarImage} />
                        ) : (
                            <>
                                <span className={styles.plusIcon}>+</span>
                                <span className={styles.uploadText}>Upload</span>
                            </>
                        )}
                    </label>
               </>
            ) : (
                <div className={styles.code}>
                    <CodeDisplay codeString={componentInfo.code}/>
                </div>
            )}
            
        </div>
    );
}

export default InputAvatar;
