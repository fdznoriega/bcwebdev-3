import { useParams, useHistory} from "react-router-dom";
import PostPreview from "./PostPreview";


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
    }
    else {
        user = props.store.users.filter(u => u.id === props.store.currentUserId)[0];
    }

    // user is now defined so we can grab posts
    const posts = props.store.posts.filter(p => p.userId === user.id);

    return (
        <div>
            {/* user info */}
            <section>
                {/* photo and user id */}
                <div>
                    <p>{user.photo}</p>
                    <p>{user.id}</p>
                </div>

                {/* bio */}
                <div>
                    <p>{user.bio}</p>
                </div>
            </section>

            {/* user recent posts? */}
            <section>
                Recent Posts:
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
