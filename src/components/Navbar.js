import React from 'react';
import css from './Navbar.module.css';

function Navbar(props) {
    function handleNavChange(page){
        if (props.onNavChange){
            console.log("Redirecting to: " + page);
            props.onNavChange(page);
        }
    }

    return (
        <nav className={css.navbar}>
            <div className={css.navItem}>
                <button onClick={e => handleNavChange("Water")}>
                    <i className="fas fa-compass"></i>
                </button>
            </div>
            <div className={css.navItem}>
                <button onClick={e => handleNavChange("Food")}>
                    <i className="fas fa-utensils"></i>
                </button>
            </div>
            <div className={css.navItem}>
                <button onClick={e => handleNavChange("NewPost")}>
                    <i className="fas fa-plus-square"></i>
                </button>
            </div>
            <div className={css.navItem}>
                <button onClick={e => handleNavChange("Housing")}>
                    <i className="fas fa-home"></i>
                </button>
            </div>
            <div className={css.navItem}>
                <button onClick={e => handleNavChange("WildCard")}>
                    <i className="fas fa-vr-cardboard"></i>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
