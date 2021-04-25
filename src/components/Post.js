
import {useParams} from 'react-router-dom';

function Post(props) {

    let {postId} = useParams();
    console.log(postId);

    return (
        <p>Post</p>
    )

}

export default Post;
