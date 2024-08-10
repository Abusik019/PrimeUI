import styles from "./style.module.scss";
import { Installation } from "../../components/Installation";
import InputAvatar from "../../components/InputAvatar";
import { Import } from "../../components/Import";
import { NavigationPanel } from "../../components/NavigationPanel";

const avatar = {
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

const GLOBAL_LIST = [
  {
    name: 'On this page',
  },
  {
    name: 'Installation',
    href: '#installation'
  },
  {
    name: 'Import',
    href: '#import'
  },
  {
    name: 'Usage',
    href: '#usage',
    links: [
      {
        name: 'Disabled'
      },
      {
        name: 'Bordered',
      },
      {
        name: 'Radius',
      },
      {
        name: 'Colors',
      },
      {
        name: 'Avatar Fallbaks',
      },
      {
        name: 'Custom Fallback',
      },
      {
        name: 'Custom Implementation',
      },
      {
        name: 'Custom initial logic',
      },
    ]
  },
  {
    name: 'Avatar Group',
    links: [
      {
        name: 'Group Disabled',
      },
      {
        name: 'Group Max Count',
      },
      {
        name: 'Group Total Count',
      },
      {
        name: 'Group Custom Count',
      },
      {
        name: 'Group Grid',
      },
      {
        name: 'Group Custom Implementation',
      },
    ]
  },
  {
    name: 'Slots',
    links: [
      {
        name: 'Custom Avatar Styles'
      },
    ]
  },
  {
    name: 'Data Attributes'
  },
  {
    name: 'API',
    links: [
      {
        name: 'Avatar Props'
      },
      {
        name: 'Avatar Group Props'
      }
    ]
  }
]

function Avatar() {
    return (
        <>
            <div className={styles.avatar}>
                <h1>{avatar.name}</h1>
                <p>{avatar.description}</p>
                <div className={styles.line}></div>
                <Installation componentName="avatar" />
                <button className={styles.warning}>
                    The above command is for individual installation only. You
                    may skip this step if @nextui-org/react is already installed
                    globally.
                </button>
                <Import />
                <InputAvatar componentInfo={avatar} />
            </div>
            <section className={styles.sidePanel}>
                <NavigationPanel children={GLOBAL_LIST}/>
            </section>
        </>
    );
}

export default Avatar;
