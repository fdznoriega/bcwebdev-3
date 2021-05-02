import {useParams, useHistory} from "react-router-dom";
import PostPreview from "./PostPreview";
import publicUrl from '../utils/publicUrl';
import css from './Profile.module.css';

function Profile(props) {

    const history = useHistory();

    let user;

    let {userId} = useParams();

    if(userId) {
        // match on the param given
        let potentialUser = props.store.users.filter(u => u.id === userId)[0];

        // if matching on undefined...leave this url
        if(!potentialUser) {
            // push to home
            history.push("/");
            // return nothing from this component
            return null;
        }
        // update user if we found them
        user = potentialUser;
    }
    else {
        // update user to be current user
        user = props.store.users.filter(u => u.id === props.store.currentUserId)[0];
    }

    // user is now defined so we can grab posts
    const posts = props.store.posts.filter(p => p.userId === user.id);

    return (
        <div className={css.profile}>
            {/* user info */}
            <section>
                {/* photo and user id */}
                <div>
                    <p>{user.id}</p>
                    <img className={css.profile_img} src={publicUrl(user.photo)}></img>
                </div>

                {/* bio */}
                <div>
                    <p>Passionate about helping others. Looking for food banks!</p>
                </div>
            </section>

            {/* user recent posts? */}
            <section>
                <p className={css.profile_recent}>Recent Posts:</p>
                {
                    posts
                        .sort((a,b)=>new Date(b.datetime) - new Date(a.datetime))
                        .slice(0, 3)
                        .map(p =>
                            <PostPreview
                                key={p.id}
                                user={user}
                                post={p}
                                comments={props.findComments(p)}
                                likes={props.findLikes(p)}
                                onLike={props.onLike}
                                onUnlike={props.onUnlike}
                                onComment={props.onComment}
                                isFullPost={false}
                            />
                    )
                }
            </section>



        </div>
    );
}

export default Profile;
