import css from './PostPreview.module.css';
import {Link} from 'react-router-dom';
import publicUrl from '../utils/publicUrl';
import {useState} from 'react';

function PostPreview(props) {

    // key, user, post, comments, likes, onLike, onUnlike, onComment
    const post = props.post;
    const maxChars = 100;
    
    // comment can be added when fullpost
    const [comment, setComment] = useState('');
    const [toggleComment, setToggleComment] = useState(false); // hidden initially

    // placeholder title and body which will be shrunk if we're in preview mode
    let title;
    let body;

    if(props.isFullPost) {
        title = post.title;
        body = post.body;
    }
    else {
        title = post.title.length > maxChars ? post.title.substring(0, maxChars - 4) + "..." : post.title;
        body = post.body.length > maxChars ? post.body.substring(0, maxChars - 4) + "..." : post.body;
    }

    // get num of likes, num of comments
    let likeCount = props.likes.count;
    let commentCount = props.comments.length;

    function handleLike() {
        props.onLike(post.id);
    }

    function handleUnlike() {
        props.onUnlike(post.id);
    }

    function handleComment() {
        setToggleComment(!toggleComment);
    }

    function handleSubmitComment(event){
        props.onComment(props.post.id, comment); // this calls addComment from App.js
        setComment(''); //reset
        setToggleComment(false); //close comment box
        event.preventDefault(); // prevent page refresh
    }

    // renders like icon, which can be "liked" or "unliked"
    function renderLikeIcon() {
        if(props.likes.self) {
            return (
                <i className="fas fa-heart" onClick={handleUnlike}></i>
            );
        }
        else {
            return (
                <i className="far fa-heart" onClick={handleLike}></i>
            );
        }
    }

    function renderCommentIcon() {
        if(!props.isFullPost) {
            return (
                <Link to={"/post/" + post.id}>
                    <i className="fas fa-comment" onClick={handleComment}></i>
                </Link>
            );
        }
        else {
            return <i className="fas fa-comment" onClick={handleComment}></i>;
        }
    }

    function findPreviewType() {
        if(!props.isFullPost) {
            return css.preview_background;
        } else {
            return css.preview_background_expanded;
        }
    }

    function renderExpandButton() {
        if(!props.isFullPost) {
            return (
              <Link to= {"/post/" + post.id}>
                  <i className="fas fa-angle-right fa-2x arrow"></i>
              </Link>
            )
        } else {
            return (
              <Link to= {"/"}>
                  <i className="fas fa-angle-left fa-2x arrow"></i>
              </Link>
          )
        }
    }

    // takes in post
    function renderCategoryIcon(p) {
        console.log(p.category);
        switch (p.category) {
            case "Housing":
                return <span className="fas fa-warehouse cat"></span>;
            case "Water":
                return <span className="fas fa-tint cat"></span>;
            case "Food":
                return <span className="fas fa-utensils cat"></span>;
        }
    }

    return (
        <div>
            {/* main content */}
            <div className={findPreviewType()}>
                {/* FIRST COLUMN: COLOR */}
                <div className={css.color_flex_item}>
                    {renderCategoryIcon(post)}
                </div>

                {/* SECOND COLUMN: CONTENT */}
                <div className={css.content_flex_item}>
                    {/* user icon and title section */}
                    <section className={css.content_header}>
                        <Link to={"/profile/" + props.user.id}>
                            <img
                                className={css.user_image}
                                src={publicUrl(props.user.photo)}
                                alt={props.user.id}
                            />
                        </Link>

                        {/* remove this if too ugly */}
                        {props.isFullPost ? <span>{post.userId}</span> : null }

                        <Link to={"/post/" + post.id}>
                            <b>
                                <p className={css.title_text}>{title}</p>
                            </b>
                        </Link>

                    </section>

                    <hr className={css.title_divide}></hr>

                    {/* body preview section */}
                    <section>
                        <p>{body}</p>
                    </section>

                    {/* likes and comments */}
                    <section>
                        <div className={css.like_info}>
                            <span className={css.count}>{likeCount}</span>
                            {renderLikeIcon()}
                        </div>

                        <div className={css.comment_info}>
                            <span className={css.count}>{commentCount}</span>
                            {renderCommentIcon()}
                        </div>
                    </section>


                </div>
                {/* THIRD COLUMN: EXPAND POST BUTTON */}
                <div className={css.expand_flex_item}>
                    {renderExpandButton()}
                </div>
            </div>
            {/* add comment div */}
            {
                toggleComment &&
                <form className={css.addComment} onSubmit={handleSubmitComment}>
                    <input 
                        type="text" 
                        placeholder="Add a comment???" 
                        value={comment} 
                        onChange={e=>setComment(e.target.value)}
                    />
                    <button type="submit">Post</button>
                </form>
            }
        </div>
    );
}

export default PostPreview;
