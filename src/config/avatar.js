export const avatarConfig = [
    {
        name: "On this page",
        href: '#onThisPage',
        visible: true
    },
    {
        name: "Installation",
        href: "#installation",
        visible: true
    },
    {
        name: "Import",
        href: "#import",
        visible: true
    },
    {
        name: "Usage",
        href: "#usage",
        visible: true,
        links: [
            {
                name: "Disabled",
                description: "",
                visible: false
            },
            {
                name: "Bordered",
                visible: false
            },
            {
                name: "Radius",
                visible: false
            },
            {
                name: "Colors",
                visible: false
            },
            {
                name: "Avatar Fallbaks",
                visible: false
            },
            {
                name: "Custom Fallback",
                visible: false
            },
            {
                name: "Custom Implementation",
                visible: false
            },
            {
                name: "Custom initial logic",
                visible: false
            },
        ],
    },
    {
        name: "Avatar Group",
        visible: false,
        links: [
            {
                name: "Group Disabled",
                visible: false
            },
            {
                name: "Group Max Count",
                visible: false
            },
            {
                name: "Group Total Count",
                visible: false
            },
            {
                name: "Group Custom Count",
                visible: false
            },
            {
                name: "Group Grid",
                visible: false
            },
            {
                name: "Group Custom Implementation",
                visible: false
            },
        ],
    },
    {
        name: "Slots",
        visible: false,
        links: [
            {
                name: "Custom Avatar Styles",
                visible: false
            },
        ],
    },
    {
        name: "Data Attributes",
        visible: false
    },
    {
        name: "API",
        visible: false,
        links: [
            {
                name: "Avatar Props",
                visible: false
            },
            {
                name: "Avatar Group Props",
                visible: false
            },
        ],
    },
];

export const avatarInfo = {
    name: "Avatar",
    description:
        "The Avatar component is used to represent a user, and displays the profile picture, initials or fallback icon.",
    codeImage: "../../../src/assets/avatar-code.png",
    code: `  import { useState } from "react";
  import styles from "./style.module.scss";
  import { Installation } from '../../components/Installation/index';
import InputAvatar from '../../components/InputAvatar/index';

  function InputAvatar({ componentInfo }) {
      const [imageUrl, setImageUrl] = useState('');
  
      const handleFileChange = (e) => {
          const file = e.target.files[0];
          if (file) {
              const url = URL.createObjectURL(file);
              setImageUrl(url);
          }
      };
  
      return (
          <div className={styles.avatarElement}>
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
          </div>
      );
  }`,
};