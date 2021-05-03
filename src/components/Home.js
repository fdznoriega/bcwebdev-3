import React from 'react';
import PostPreview from './PostPreview';
import {useParams} from 'react-router-dom';
import css from './Home.module.css';
import {
    Link
} from "react-router-dom";
import publicUrl from '../utils/publicUrl';

function Home(props) {

    const posts = props.store.posts;
    const user = props.store.users.filter(u => u.id===props.store.currentUserId)[0];

    console.log(user);

    let {category} = useParams();

    // stacked posts, sorted by time published
    return (
        <div>
            <p className={css.profile}>
                <Link to="/profile">
                    <img 
                        src={publicUrl(user.photo)}
                        className={css.userProfilePicture}
                        alt="profile"
                    />
                </Link>
            </p>
            <p className={css.home_title}>Your Feed</p>
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
                        user={props.findUser(post)}
                        post={post}
                        comments={props.findComments(post)}
                        likes={props.findLikes(post)}
                        onLike={props.onLike}
                        onUnlike={props.onUnlike}
                        isFullPost={false}
                    />
                )
            }
        </div>
    );

}

export default Home;
