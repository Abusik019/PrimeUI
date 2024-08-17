export const avatarConfig = {
    name: 'Avatar', 
    description: 'The Avatar component is used to represent a user, and displays the profile picture, initials or fallback icon.',
    tags: [],
    image: '',
    blocks: [
        {
            line: true,
            title: 'Installation',
            description: '',
            message: {
                status: 'warning',
                text: 'The above command is for individual installation only. You may skip this step if @nextui-org/react is already installed globally.'
            },
            content: '',
            list: {
                direction: 'line', 
                items: [
                    {
                        name: 'CLI',
                        text: 'npx nextui-cli@latest add avatar',
                        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABrUlEQVR4nO2YPUvDUBSGK6ibgouLi+7ugnRQW8FJHOzShvu+J0h/gIvVwcTN2dHZxbp0cNJJ/AMO4qqDdtGlToofkWCFa2ktJm0+9D7wwoXklPPk5qbJzWQMBoPBYPjLFAqFYZI7JOskvYhSB+CWy+Wh0AIAjiJs3GtJNWzzuRib9/wopeYDC5Dc7HVDAJ5IXv805vfzK2FmwO3DVd1XSk10GXuagJs0gWcAN13GXpIFfnvLuYEFRCQPYDfOiEg+sIAhbkQkS3IjzohI9v8uYhgBmhlABLdQQ0RmLMsaJ3mQxjVwrNeQXAfwkiaBhm3b0y11OQD3aRHwADwCWGmpnSR5mQoBfuYdwLZeT3I2TQIPJBf1ehFZTYUAgAvLsqb0WqXUsr8+mu/55wBO9bT7+mJMAte2bY9oZQMkHQBv/vFOr8OO4wySPItdAMDJ1/mlUmkUQE0/XiwWxzr9Psm92AVIvpLcIlkgedWmgRqAJX8m9JBc859eSRDoaxBGoB/bKgEEKmEEFhIgMBdYoClRjVHgMBMWf4O1+Vi8i7DxW/9fvSebuwaDwWAwZBLMB2arKsiaWALRAAAAAElFTkSuQmCC'
                    },
                    {
                        name: 'npm',
                        text: 'npm install @nextui-org/avatar',
                        image: '../../src/assets/npm.svg'
                    },
                    {
                        name: 'yarn',
                        text: 'yarn add @nextui-org/avatar',
                        image: '../../src/assets/yarn.png'
                    },
                    {
                        name: 'pnpm',
                        text: 'pnpm add @nextui-org/avatar',
                        image: '../../src/assets/pnpm.svg'
                    },
                    {
                        name: 'bun',
                        text: 'bun add @nextui-org/avatar',
                        image: '../../src/assets/Bun.svg'
                    },
                ]
            }
        },
        {
            line: false,
            title: 'Import',
            description: 'NextUI exports 3 avatar-related components:',
            message: {
                status: 'error',
                text: ''
            },
            content: 'import {Avatar, AvatarGroup, AvatarIcon} from "@nextui-org/avatar";',
            list: {
                direction: 'column', 
                items: [
                    {
                        name: 'Avatar',
                        description: 'The main component to display an avatar.'
                    },
                    {
                        name: 'AvatarGroup',
                        description: 'A wrapper component to display a group of avatars.'
                    },
                    {
                        name: 'AvatarIcon',
                        description: 'The default icon used as fallback when the image fails to load.'
                    },
                ]
            }
        },
        {
            line: false,
            title: 'Usage',
            description: '',
            message: {
                status: 'err',
                text: 'test'
            },
            code: {
                image: '../../src/assets/avatar-code.png',
                content: `  import { useState } from "react";
                import styles from "./style.module.scss";
                import { Installation } from '../../components/Installation/index';
              import InputAvatar from '../../components/InputAvatar/index';
              import { avatar } from './avatar';
              
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
                }`
            }
        },
    ]
}

