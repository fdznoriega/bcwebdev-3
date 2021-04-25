import React from 'react';
import PostPreview from './PostPreview';
import {useParams} from 'react-router-dom';

function Home(props) {

    const currentUserId = props.store.currentUserId;
    const users = props.store.users;
    const comments = props.store.comments;
    const likes = props.store.likes;
    const posts = props.store.posts;

    let {category} = useParams();

    // given some post, fetch the user
    function findUser(post) {
        return users.filter(user => user.id === post.id)
    }

    // given some post, fetch the comments
    function findComments(post) {
        return comments.filter(comment => comment.postId === post.id)
    }

    // given some post, fetch the likes
    function findLikes(post) {
        let postLikes = likes.filter(like => like.postId === post.id);

        return {
            self: postLikes.some(like => like.userId === currentUserId),
            count: postLikes.length
        }
    }

    // stacked posts, sorted by time published
    return (
        <div>
            {posts
                .sort((a,b)=>new Date(b.datetime) - new Date(a.datetime))
                // post filtering by topic
                .filter(post => {
                    if(category) {
                        return category.toLowerCase() == post.category.toLowerCase();
                    }
                    else {
                        return true;
                    }
                })
                // iterate through posts
                .map(post =>
                    <PostPreview
                        key={post.id}
                        user={findUser(post)}
                        post={post}
                        comments={findComments(post)}
                        likes={findLikes(post)}
                        onLike={props.onLike}
                        onUnlike={props.onUnlike}
                        onComment={props.onComment}
                    />
                )
            }
        </div>
    );

}

export default Home;
