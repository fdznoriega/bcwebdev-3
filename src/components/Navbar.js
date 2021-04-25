import React from 'react';
import css from './Navbar.module.css';
import {
    Link
} from "react-router-dom";

function Navbar() {
    return (
        <nav className={css.navbar}>
            {/* water */}
            <div className={css.navItem}>
                <Link to="/category/water">
                    <button>
                        <i className="fas fa-tint"></i>
                    </button>
                </Link>
                <p className={css.navText}>Water</p>
            </div>
            {/* food */}
            <div className={css.navItem}>
                <Link to="/category/food">
                    <button>
                        <i className="fas fa-utensils"></i>
                    </button>
                </Link>
                <p className={css.navText}>Food</p>
            </div>
            {/* new post */}
            <div className={css.navItem}>
                <Link to="/newpost">
                    <button>
                        <i className="fas fa-plus-square"></i>
                    </button>
                </Link>
                <p className={css.navText}>New Post</p>
            </div>
            {/* housing */}
            <div className={css.navItem}>
                <Link to="/category/housing">
                    <button>
                        <i className="fas fa-home"></i>
                    </button>
                </Link>
                <p className={css.navText}>Housing</p>
            </div>

            {/* wild card / home */}
            <div className={css.navItem}>
                <Link to="/">
                    <button>
                        <i className="fas fa-vr-cardboard"></i>
                    </button>
                </Link>
                <p className={css.navText}>Wild Card</p>
            </div>
        </nav>
    );
}

export default Navbar;
