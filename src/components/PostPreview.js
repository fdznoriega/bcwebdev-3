
function PostPreview(props) {
    
    // key, user, post, comments, likes, onLike, onUnlike, onComment
    const post = props.post;
    const maxChars = 100;

    // if title/body is more than max chars, chop it to max chars and "..."
    let titlePreview = post.title.length > maxChars ? post.title.substring(0, maxChars - 4) + "..." : post.title;
    let bodyPreview = post.body.length > maxChars ? post.body.substring(0, maxChars - 4) + "..." : post.body;

    function handleLike() {

    }

    function handleUnlike() {

    }

    function handleExpandPost() {
        console.log("expanding post");
    }

    return (
        <div>
            {/* FIRST COLUMN: COLOR */}
            {/* SECOND COLUMN: CONTENT */}
            {/* THIRD COLUMN: EXPAND POST BUTTON */}
            <div>
                <p>USER IMAGE</p>
                <b>
                    <p>{titlePreview}</p>
                </b>
                
            </div>
            
            <div>
                <p>{bodyPreview}</p>
            </div>

            <div>
                <p>LIKES ICON AND COUNT</p>
                <p>COMMENTS ICON AND COUNT</p>
            </div>

            <div>
                <button onClick={handleExpandPost}>Click me to expand the post</button>
            </div>

        </div>
    );
}

export default PostPreview;