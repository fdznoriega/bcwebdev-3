import React from 'react';
import css from './Navbar.module.css';
import {
    Link
} from "react-router-dom";

function Navbar() {
    return (
        <nav className={css.navbar}>
            {/* home */}
            <div className={css.navItem}>
                <Link to="/">
                    <span className="fas fa-home cat"></span>
                </Link>
                <p className={css.navText}>Home</p>
            </div>
            {/* new post */}
            <div className={css.navItem}>
                <Link to="/newpost">
                    <span className="fas fa-plus-square cat"></span>
                </Link>
                <p className={css.navText}>New Post</p>
            </div>
            {/* water */}
            <div className={css.navItem}>
                <Link to="/category/water">
                    <span className="fas fa-tint cat"></span>
                </Link>
                <p className={css.navText}>Water</p>
            </div>
            {/* food */}
            <div className={css.navItem}>
                <Link to="/category/food">
                    <span className="fas fa-utensils cat"></span>
                </Link>
                <p className={css.navText}>Food</p>
            </div>
            {/* housing */}
            <div className={css.navItem}>
                <Link to="/category/housing">
                    <span className="fas fa-warehouse cat"></span>
                </Link>
                <p className={css.navText}>Housing</p>
            </div>
        </nav>
    );
}

export default Navbar;
