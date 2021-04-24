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
                    <i className="fas fa-tint"></i>
                </button>
                <p className={css.navText}>Water</p>
            </div>
            <div className={css.navItem}>
                <button onClick={e => handleNavChange("Food")}>
                    <i className="fas fa-utensils"></i>
                </button>
                <p className={css.navText}>Food</p>
            </div>
            <div className={css.navItem}>
                <button onClick={e => handleNavChange("NewPost")}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <p className={css.navText}>New Post</p>
            </div>
            <div className={css.navItem}>
                <button onClick={e => handleNavChange("Housing")}>
                    <i className="fas fa-home"></i>
                </button>
                <p className={css.navText}>Housing</p>
            </div>
            <div className={css.navItem}>
                <button onClick={e => handleNavChange("WildCard")}>
                    <i className="fas fa-vr-cardboard"></i>
                </button>
                <p className={css.navText}>Wild Card</p>
            </div>
        </nav>
    );
}

export default Navbar;
