import React, { useContext, useState } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from './../../context/alert/alertContext';

const Search = () => {

    const githubcontext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const { searchUsers, clearUsers, users } = githubcontext;
    const { setAlert } = alertContext;

    const [text, setText] = useState("");

    const onInputChange = e => setText(e.target.value);

    const onSubmit = e => {
        e.preventDefault();
        if (text === "") {
            setAlert("Please enter some text", "light");
        } else {
            searchUsers(text);
            setText("");
        }
    }

    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <input type="text" name="text" placeholder="Search users..." value={text} onChange={onInputChange} />
                <input type="submit" value="Search" className="btn btn-dark btn-block" />
            </form>
            {users.length > 0 && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
        </div>
    );
}

export default Search;