import {useState} from "react"
import {useHistory} from "react-router-dom";
import css from './NewPost.module.css';

function NewPost(props) {

    const history = useHistory();
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');

    function handleTitle(e) {
        setTitle(e.target.value)
    }

    function handleText(e) {
        setText(e.target.value);
    }

    function handleCategory(e) {
        setCategory(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(title === '' || text === '' || category === '') { return; }
        console.log('posting');
        props.onPost(title, text, category);
    }

    function handleCancel() {
        history.push("/");
    }

    return (
        <form onSubmit={handleSubmit} onCancel={handleCancel}>
          <p className={css.form_title}>New Post</p>
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
                    Title:
                    <input className={css.title_input}
                        type="title"
                        name="title"
                        placeholder="title"
                        value={title}
                        onChange={handleTitle}
                    />
                </label>
                <label>
                    <p className={css.text_header}>What's Going On?</p>
                    <textarea
                        type="text"
                        name="text"
                        placeholder="text"
                        value={text}
                        onChange={handleText}
                    />
                </label>
                <input type="submit" value="Submit" />
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </form>



    );
}

export default NewPost;
