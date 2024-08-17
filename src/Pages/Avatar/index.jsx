import styles from "./style.module.scss";
import { Installation } from "../../components/Installation";
// import InputAvatar from "../../components/InputAvatar";
import { Import } from "../../components/Import";
// import { NavigationPanel } from "../../components/NavigationPanel";
import { Links } from "../../components/Links";
// import { getName, getVisibleItems } from "../../utils/getName";
import { useEffect, useState } from "react";
import { avatarConfig } from "../../config/avatar";

function Avatar() {

    // const [flatConfig, setFlatConfig] = useState(null);

    // useEffect(() => {
    //   const names = getName(avatarConfig);
    //   setFlatConfig(names)
    // }, []);

    return (<>
        <div className={styles.main__container}>
            <h1>{avatarConfig.name}</h1>
            <p>{avatarConfig.description}</p>
            {avatarConfig.tags && <ul className={styles.tags}></ul>}
            {avatarConfig.image && <img src={avatarConfig.image}/>}
            <Links />
            <ul className={styles.main__content}>
                {avatarConfig.blocks && avatarConfig.blocks.map((item, index) => {
                    switch(item.title){
                        case 'Installation':
                            return (
                                <div key={index} className={styles.installation}>
                                    {item.line && <div className={styles.line}></div>}
                                    <Installation 
                                        title={item.title} 
                                        description={item.description} 
                                        text={item.text}
                                        list={item.list}
                                    />
                                    <button className={`${styles.button} ${item.message.status ? styles[item.message.status] : ''}`}>{item.message.text}</button>
                                </div>
                            );
                        case 'Import':
                            return (
                                <div>
                                    {item.line && <div className={styles.line}></div>}
                                    <Import 
                                        title={item.title}
                                        content={item.content}
                                        list={item.list}
                                        description={item.description}
                                    />
                                    <button className={`${styles.button} ${item.message.status ? styles[item.message.status] : ''}`}>{item.message.text}</button>
                                </div>
                            )
                    }
                })}   
            </ul>
            {/* {flatConfig && flatConfig.map((item, index) => {
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
            })} */}
        </div>
        <section className={styles.sidePanel}>
            {/* <NavigationPanel children={getVisibleItems(avatarConfig)}/> */}
        </section>
    </>);
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