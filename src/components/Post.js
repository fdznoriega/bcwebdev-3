import PostPreview from './PostPreview';

function Post(props) {

  function handleLike() {
      props.onLike(post.id);
  }

  function handleUnlike() {
      props.onUnlike(post.id);
  }

  function renderLikeIcon() {
      if(props.likes.self) {
          return (
              <i class="fas fa-heart" onClick={handleUnlike}></i>
          );
      }
      else {
          return (
              <i class="far fa-heart" onClick={handleLike}></i>
          );
      }
  }

  return (
    <PostPreview
        key={props.info.key}
        user={props.info.user}
        post={post}
        comments={findComments(post)}
        likes={findLikes(post)}
        onLike={props.onLike}
        onUnlike={props.onUnlike}
        onComment={props.onComment}
        onExpand={props.onExpand}
    />
  )

}

export default Post;
