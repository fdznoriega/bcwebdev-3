
function PostPreview(props) {
    
    // key, user, post, comments, likes, onLike, onUnlike, onComment
    const post = props.post;
    const maxChars = 100;

    // if title/body is more than max chars, chop it to max chars and "..."
    let titlePreview = post.title.length > maxChars ? post.title.substring(0, maxChars - 4) + "..." : post.title;
    let bodyPreview = post.body.length > maxChars ? post.body.substring(0, maxChars - 4) + "..." : post.body;

    // get num of likes, num of comments
    let likeCount = props.likes.count;
    let commentCount = props.comments.length;

    function handleLike() {
        props.onLike(post.id);
    }

    function handleUnlike() {
        props.onUnlike(post.id);
    }

    function handleExpandPost() {
        console.log("expanding post");
    }

    function handleExpandComments() {
        console.log("expand posts and jump to comments")
    }

    // renders like icon, which can be "liked" or "unliked"
    function renderLikeIcon() {
        if(props.likes.self) {
            return (
                <img 
                    src=""
                    alt="Unlike Action"
                    onClick={handleUnlike}
                />
            );
        }
        else {
            return (
                <img 
                    src=""
                    alt="Like Action"
                    onClick={handleLike}
                />
            );
        }
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
                        <span>{likeCount}</span>
                        {renderLikeIcon()}
                    </div>

                    <div>
                        <span>{commentCount}</span>
                        <img 
                            src=""
                            alt="Comment Action"
                            onClick={handleExpandComments}
                        />

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