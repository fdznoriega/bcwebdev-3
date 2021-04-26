import {useState} from "react"
import {useHistory} from "react-router-dom";
import css from './NewPost.module.css';

function NewPost(props) {

    const history = useHistory();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');

    function handleTitle(e) {
        setTitle(e.target.value)
    }

    function handleBody(e) {
        setBody(e.target.value);
    }

    function handleCategory(e) {
        setCategory(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(title === '' || body === '' || category === '') { return; }
        console.log('posting');
        props.onPost(title, body, category);
    }

    function handleCancel() {
        history.push("/");
    }

    return (
        <form onSubmit={handleSubmit} onCancel={handleCancel}>
            <div className={css.form_container}>
                <label>
                    Choose a category:
                    <select value={category} onChange={handleCategory}>
                        <option value="water">Water</option>
                        <option value="food">Food</option>
                        <option value="housing">Housing</option>
                    </select>
                </label>
                <label>
                    <input
                        type="title"
                        name="title"
                        placeholder="title"
                        value={title}
                        onChange={handleTitle}
                    />
                </label>
                <label>
                    <input
                        type="body"
                        name="body"
                        placeholder="body"
                        value={body}
                        onChange={handleBody}
                    />
                </label>
                <input type="submit" value="Submit" />
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </form>



    );
}

export default NewPost;
