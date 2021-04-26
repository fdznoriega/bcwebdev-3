import {useParams} from 'react-router-dom';
import PostPreview from './PostPreview';
import css from './Post.module.css';
import publicUrl from '../utils/publicUrl';

function Post(props) {

    let {postId} = useParams();
    console.log(postId);

    function findComments(p) {
        return props.store.comments.filter(comment => comment.postId === p.id)
    }

    function findLikes(p) {
        let postLikes = props.store.likes.filter(like => like.postId === p.id);

        return {
            self: postLikes.some(like => like.userId === props.store.currentUserId),
            count: postLikes.length
        }
    }

    let matchedPost = props.store.posts.filter(p => p.id===postId)[0];
    if (!matchedPost) return (<p>404: Could not find post</p>);

    const post = matchedPost;
    const likes = findLikes(post);
    const comments = findComments(post);

    return (
        <div>
            {/* use post preview and pass in isFullPost as true */}
            <PostPreview
                key={post.id}
                user={post.userId}
                post={post}
                comments={comments}
                likes={likes}
                onLike={props.onLike}
                onUnlike={props.onUnlike}
                onComment={props.onComment}
                isFullPost={true}
            />
             <div className={css.comments_section}>
                <hr className={css.comment_divide}></hr>
                <p className={css.comments_header}>Comments:</p>

                    {
                        comments.map((comment, i) => {
                            return(
                                <div key={i}>
                                    <img className={css.user_image} src={"/assets/default.png"}></img>
                                    <p className={css.user}>{comment.userId}</p>
                                    <p className={css.user_text}>{comment.text}</p>
                                    <p className={css.user_date}>{comment.datetime}</p>
                                </div>
                            );
                        })
                    }

                </div>
             </div>
    )

}

export default Post;
