

function NewPost(props) {
    


    return (
        <div>
            {/* cancel and post actions */}
            <div>
                <button onClick={props.onCancel}>Cancel</button>
                <button onClick={props.onPost}>Post</button>
            </div>
            
        </div>
        

    );
}

export default NewPost;