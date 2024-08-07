import styles from "./style.module.scss";
import "../../reset.scss";
import Toggle from "../Toggle";
import { ThemeContext, themes } from "../contexts/ThemeContext";
import { useState, useRef, useEffect } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Main from './../Main';
import Avatar from './../Avatar/index';

const Root = () => {
    const [hideClearInput, setHideClearInput] = useState(false);
    const inputRef = useRef(null);
    const buttonRef = useRef(null);
    const [isOpenComponents, setIsOpenComponents] = useState(false);
    const [isOpenCustomization, setIsOpenCustomization] = useState(false);

    function handleInputSearch() {
        setHideClearInput(true);
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (inputRef.current && !inputRef.current.contains(event.target) &&
                buttonRef.current && !buttonRef.current.contains(event.target)) {
                setHideClearInput(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [inputRef, buttonRef]);

    return (
        <ThemeContext.Consumer>
            {({ theme, setTheme }) => (
                <>
                    <nav className={styles.navPanel}>
                        <Link  to='/'><h1>PrimeUI</h1></Link>
                        <div className={styles.inputWrapper}>
                            <input
                                type="text"
                                placeholder="Quick Search"
                                onClick={handleInputSearch}
                                ref={inputRef}
                            />
                            {hideClearInput && (
                                <button ref={buttonRef}>&#x2715;</button>
                            )}
                        </div>
                        <div className={styles.navLastSection}>
                            <a  className={styles.github}
                                href="https://github.com/Abusik019"
                                target="_blank"
                            ></a>
                            <Toggle
                                onChange={() => {
                                    if (theme === themes.light) setTheme(themes.dark);
                                    if (theme === themes.dark) setTheme(themes.light);
                                }}
                                value={theme === themes.dark}
                            />
                        </div>
                    </nav>
                    <div className={styles.container}>
                        <aside className={styles.aside}>
                            <ul className={styles.asideContainer}>
                                <li>
                                    <h1 onClick={() => setIsOpenComponents(value => value === false ? true : false)} className={isOpenComponents && styles.open} >Components</h1>
                                    <ul style={{display: isOpenComponents ? 'flex' : 'none'}}>
                                        <li><NavLink to='/avatar'>Avatar</NavLink></li>
                                        <li><NavLink to='#'>Badge</NavLink></li>
                                        <li><NavLink to='#'>Button</NavLink></li>
                                    </ul>
                                </li>
                                <li >
                                    <h1 onClick={() => setIsOpenCustomization(value => value === false ? true : false)} className={isOpenCustomization && styles.open}>Customization</h1>
                                    <ul style={{display: isOpenCustomization ? 'flex' : 'none'}}>
                                        <li><NavLink to='#'>Theme</NavLink></li>
                                        <li><NavLink to='#'>Layout</NavLink></li>
                                        <li><NavLink to='#'>Colors</NavLink></li>
                                    </ul>
                                </li>
                            </ul>
                        </aside>
                        <main className={styles.main}>
                            <Routes>
                                <Route path="/" element={<Main />}/>
                                <Route path="/avatar" element={<Avatar />}/>
                                {/* <Route path="/button" element={<Avatar />}/> */}
                            </Routes>
                        </main>
                    </div>
                </>
            )}
        </ThemeContext.Consumer>
    );
};
export default Root;
