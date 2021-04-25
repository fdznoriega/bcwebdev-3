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
                <p className={css.comments_header}>Comments</p>
             </div>
        </div>
    )

}

export default Post;
