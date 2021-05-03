import {useParams} from 'react-router-dom';
import PostPreview from './PostPreview';
import css from './Post.module.css';
import publicUrl from '../utils/publicUrl';

function Post(props) {

    let {postId} = useParams();

    let matchedPost = props.store.posts.filter(p => p.id===postId)[0];
    if (!matchedPost) return (<p>404: Could not find post</p>);

    const post = matchedPost;
    const user = props.findUser(post);
    const likes = props.findLikes(post);
    const comments = props.findComments(post);

    function renderComments() {
        if(comments.length === 0) return null;

        return (
            <div className={css.comments_section}>
                <hr className={css.comment_divide}></hr>
                <p className={css.comments_header}>Comments:</p>
                {
                    comments.map((comment, i) => {
                        // fetch comment user
                        let commentUser = props.store.users.filter(u => u.id === comment.userId)[0];
                        return(
                            <div key={i}>
                                <div className={css.comment}>
                                    <img className={css.user_image} src={publicUrl(commentUser.photo)}></img>
                                    <b>
                                        <p className={css.user}>{commentUser.id}</p>
                                    </b>
                                </div>
                                <p className={css.user_text}>{comment.text}</p>
                                <p className={css.user_date}>{comment.datetime}</p>
                            </div>
                        );
                    })
                }
            </div>
        );
    }


    return (
        <div>
            {/* use post preview and pass in isFullPost as true */}
            <PostPreview
                key={post.id}
                user={user}
                post={post}
                comments={comments}
                likes={likes}
                onLike={props.onLike}
                onUnlike={props.onUnlike}
                onComment={props.onComment}
                isFullPost={true}
            />
                
            {renderComments()}
            
        </div>
    )

}

export default Post;
