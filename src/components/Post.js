
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
    
  )

}

export default Post;
