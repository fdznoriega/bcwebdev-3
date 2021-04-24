import css from './PostPreview.module.css';

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
        props.onExpand(props);
    }

    function handleExpandComments() {
        console.log("expand posts and jump to comments")
    }

    // renders like icon, which can be "liked" or "unliked"
    function renderLikeIcon() {
        if(props.likes.self) {
            return (
                <i class="fas fa-heart" onClick={handleUnlike}></i>
            );
        }
        else {
            return (
                <i class="far fa-heart" onClick={handleLike}></i>
            );
        }
    }

    return (
        <div className={css.preview_background}>
            {/* FIRST COLUMN: COLOR */}
            <div className={css.color_flex_item}></div>

            {/* SECOND COLUMN: CONTENT */}
            <div className={css.content_flex_item}>
                {/* user icon and title section */}
                <section>
                    <img src={props.user.photo} alt={"pic"} className={css.user_image}></img>
                    <b>
                        <p className={css.title}>{titlePreview}</p>
                    </b>
                </section>

                <hr className={css.divide}></hr>

                {/* body preview section */}
                <section>
                    <p>{bodyPreview}</p>
                </section>

                {/* likes and comments */}
                <section>
                    <div className={css.like_info}>
                        <span>{likeCount}</span>
                        {renderLikeIcon()}
                    </div>

                    <div className={css.comment_info}>
                        <span>{commentCount}</span>
                        <i class="fas fa-comment"></i>
                    </div>
                </section>

            </div>
            {/* THIRD COLUMN: EXPAND POST BUTTON */}
            <div className={css.expand_flex_item}>
                <i className="fas fa-angle-right fa-2x arrow" onClick={handleExpandPost}></i>
            </div>

        </div>
    );
}

export default PostPreview;
