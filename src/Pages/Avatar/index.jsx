import styles from "./style.module.scss";
import { Installation } from "../../components/Installation";
import InputAvatar from "../../components/InputAvatar";
import { Import } from "../../components/Import";
import { NavigationPanel } from "../../components/NavigationPanel";
import { Links } from "../../components/Links";
import { getName, getVisibleItems } from "../../utils/getName";
import { avatarConfig, avatarInfo } from './../../config/avatar';
import { useEffect, useState } from "react";

function Avatar() {

    const [flatConfig, setFlatConfig] = useState(null);

    useEffect(() => {
      const names = getName(avatarConfig);
      setFlatConfig(names)
    }, []);

    return (
        <>
            <div className={styles.main__container}>
                <h1>{avatarInfo.name}</h1>
                <p>{avatarInfo.description}</p>
                <Links />
                <div className={styles.line}></div>
                {flatConfig && flatConfig.map((item, index) => {
                    switch(item){
                        case 'Installation':
                            return (
                                <div key={index} style={{border: 'white'}}>
                                    <Installation componentName="avatar" />
                                    <button className={styles.warning}>
                                        The above command is for individual installation only. You
                                        may skip this step if @nextui-org/react is already installed
                                        globally.
                                    </button>
                                </div>
                            );
                        case 'Import':
                            return (
                                <Import componentName='Avatar'/>
                            );
                        case 'Usage':
                            return (
                                <InputAvatar componentInfo={avatarInfo} />
                            )
                        default:
                            return null;
                    }
                })}
            </div>
            <section className={styles.sidePanel}>
                <NavigationPanel children={getVisibleItems(avatarConfig)}/>
            </section>
        </>
    );
}

export default Avatar;





// (item) => {
//     for() {
//         switch(item...){
//             case 'avatar':
//                 return <Avatar></Avatar> 
//         }
//     }
// }