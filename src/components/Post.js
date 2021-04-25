import {useParams} from 'react-router-dom';
import PostPreview from './PostPreview';
import css from './Post.module.css';

function Post(props) {

    let {postId} = useParams();
    console.log(postId);

    function findComments(post) {
        return props.store.comments.filter(comment => comment.postId === post.id)
    }

    function findLikes(post) {
        let postLikes = props.store.likes.filter(like => like.postId === post.id);

        return {
            self: postLikes.some(like => like.userId === props.store.currentUserId),
            count: postLikes.length
        }
    }

    let matchedPost = props.store.posts.filter(post => post.id===postId)[0];
    if (!matchedPost) return (<p>404: Could not find post</p>);

    const post = matchedPost;
    const comments = findComments(post);

    function renderComments(){
        return(
            comments.map((comment, i) => {
                
                return( 
                    <div key={i}>
                        <p>{comment.userId}</p>
                        <p>{comment.text}</p>
                        <p>{comment.datetime}</p>
                    </div> 
                );
            })
        );
    }

    return (
        <div>
            {props.store.posts.filter(post => post.id === postId)
            .map(post =>
                <PostPreview
                    key={post.id}
                    user={post.userId}
                    post={post}
                    comments={findComments(post)}
                    likes={findLikes(post)}
                    onLike={props.onLike}
                    onUnlike={props.onUnlike}
                    onComment={props.onComment}
                    expand={false}
                />)}
             <div className={css.comments_section}>
                <hr className={css.comment_divide}></hr>
                <div className={css.comments_header}>{renderComments()}</div>
             </div>
        </div>
    )

}

export default Post;
