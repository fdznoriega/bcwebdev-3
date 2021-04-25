
function Profile(props) {

    // fetch profile information
    let user;

    // render the top posts of the user in their profile
    function renderThumbnails() {
        return <p>Top Posts</p>
    }

    return (
        <div>
            <section>
                <p>Username</p>
                <p>Bio</p>
            </section>

            <section>{renderThumbnails()}</section>
        </div>
    );
}

export default Profile;
