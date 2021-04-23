import React from 'react';
import PostPreview from './PostPreview';

function Home(props) {

    // store
    const users = props.store.users;
    const comments = props.store.comments;
    const likes = props.store.likes;
    const posts = props.store.posts;

    // we likely will track zipcode and category here, somewhere in the props...

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
        return likes.filter(like => like.postId === post.id)
    }

    // stacked posts, sorted by time published
    return (
        <div>
            {posts
                .sort((a,b)=>new Date(b.datetime) - new Date(a.datetime))
                // post filtering...
                // .filter(post => {
                //     if(postId) {
                //         return postId === post.id;
                //     }
                //     else {
                //         return true; 
                //     }
                // })
                .map(post =>
                    <PostPreview
                        key={post.id}
                        user={findUser(post)}
                        post={post}
                        comments={findComments(post)}
                        likes={findLikes(post)}
                        onLike={props.addLike}
                        onUnlike={props.removeLike}
                        onComment={props.addComment}
                    />
                )
            }
        </div>
    );

}

export default Home;