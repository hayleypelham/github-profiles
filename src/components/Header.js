import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { ThemeContext, themes } from '../contexts/ThemeContext';
import ToggleDark from './ToggleDark';

import {useEffect, useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <header>
            <h1 className="m-auto mt-5 d-flex align-items-center justify-content-center">GitHub Profile Search</h1>
            <InputGroup className="m-auto mt-5 d-flex align-items-center justify-content-center">
                <ThemeContext.Consumer>
                    {({ changeTheme }) => (
                    <Button
                        color="link"
                        onClick={() => {
                        setDarkMode(!darkMode);
                        changeTheme(darkMode ? themes.light : themes.dark);
                        }}
                    >
                        <i className={darkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}></i>
                        <span className="">Switch mode</span>
                    </Button>
                    )}
                </ThemeContext.Consumer>
            </InputGroup>
        </header> 
    );
}

export default Header;