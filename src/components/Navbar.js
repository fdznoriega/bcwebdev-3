

function Navbar(props) {

    function handleNavChange(page){
        if (props.onNavChange){
            console.log("Redirecting to: " + page);
            props.onNavChange(page);
        }
    }

    return (
        <nav>

            <div>
                <button onClick={e => handleNavChange("Water")}>
                    Water
                </button>
            </div>
            <div>
                <button onClick={e => handleNavChange("Food")}>
                    Food
                </button>
            </div>
            <div>
                <button onClick={e => handleNavChange("NewPost")}>
                    New Post
                </button>
            </div>
            <div>
                <button onClick={e => handleNavChange("Housing")}>
                    Housing
                </button>
            </div>
            <div>
                <button onClick={e => handleNavChange("WildCard")}>
                    Wild Card
                </button>
            </div>
        </nav>
    );
}

export default Navbar;