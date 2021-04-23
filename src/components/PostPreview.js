
function PostPreview(props) {
    
    // key, user, post, comments, likes, onLike, onUnlike, onComment
    const post = props.post;
    const maxChars = 100;

    // if title/body is more than max chars, chop it to max chars and "..."
    let titlePreview = post.title.length > maxChars ? post.title.substring(0, maxChars - 4) + "..." : post.title;
    let bodyPreview = post.body.length > maxChars ? post.body.substring(0, maxChars - 4) + "..." : post.body;

    // get num of likes, num of comments
    let numOfLikes = props.likes.filter(like => like.postId === post.id).length;
    let numOfComments = props.comments.filter(comment => comment.postId === post.id).length;

    function handleLike() {
        props.onLike();
    }

    function handleUnlike() {
        props.onUnlike();
    }

    function handleExpandPost() {
        console.log("expanding post");
    }

    function handleExpandComments() {
        console.log("expand posts and jump to comments")
    }

    return (
        <div>
            {/* FIRST COLUMN: COLOR */}
            <div>COLOR COLUMN</div>

            {/* SECOND COLUMN: CONTENT */}
            <div>
                {/* user icon and title section */}
                <section>
                    <p>USER IMAGE</p>
                    <b>
                        <p>{titlePreview}</p>
                    </b>
                </section>

                {/* body preview section */}
                <section>
                    <p>{bodyPreview}</p>
                </section>

                {/* likes and comments */}
                <section>
                    <div>
                        <span>{numOfLikes}</span>
                        <button onClick={handleLike}>
                            {/* TODO */}
                            <span>LIKE IMAGE</span>
                        </button>
                    </div>

                    <div>
                        <span>{numOfComments}</span>
                        <button onClick={handleExpandComments}>
                            {/* TODO */}
                            <span>COMMENT IMAGE</span>
                        </button>
                    </div>
                </section>

            </div>
            {/* THIRD COLUMN: EXPAND POST BUTTON */}
            <div>
                <button onClick={handleExpandPost}>expand post</button>
            </div>

        </div>
    );
}

export default PostPreview;