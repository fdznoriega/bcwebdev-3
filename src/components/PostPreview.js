
function PostPreview(props) {

    // all available tools
    // key, user, post, comments, likes, onLike, onUnlike, onComment
    const post = props.post;

    function renderComments() {

    }

    function handleLike() {

    }

    function handleUnlike() {

    }

    function handleSubmitComment(event) {

    }

    return (
        <div>
            
            <div>
                <p>USER IMAGE</p>
                <b>
                    <p>{post.title}</p>
                </b>
                
            </div>

            <div>
                <p>{post.body}</p>
            </div>

            <div>
                <p>LIKES ICON</p>
            </div>

            <div>
                <p>EXPAND POST ICON</p>
            </div>

        </div>
    );
}

export default PostPreview;