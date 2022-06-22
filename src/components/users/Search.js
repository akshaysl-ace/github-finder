import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {

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
            {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
        </div>
    );
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
}

export default Search;