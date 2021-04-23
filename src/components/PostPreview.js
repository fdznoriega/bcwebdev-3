
function PostPreview(props) {

    // all available tools
    // key, user, post, comments, likes, onLike, onUnlike, onComment
    const post = props.post;
    const maxChars = 100;

    // if title/body is more than max chars, chop it to max chars and "..."
    let titlePreview = post.title.length > maxChars ? post.title.substring(0, maxChars - 4) + "..." : post.title;
    let bodyPreview = post.body.length > maxChars ? post.body.substring(0, maxChars - 4) + "..." : post.body;

    function renderComments() {

    }

    function handleLike() {

    }

    function handleUnlike() {

    }

    function handleSubmitComment(event) {

    }

    function handleExpandPost() {

    }

    return (
        <div>
            
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
                <p>LIKES ICON</p>
            </div>

            <div>
                <button onClick={handleExpandPost}>Click me to expand the post</button>
            </div>

        </div>
    );
}

export default PostPreview;