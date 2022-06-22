import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import NavBar from './components/layout/NavBar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

const App = () => {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const searchUsers = async (text) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setUsers(res.data.items);
    setLoading(false);
  }

  const getUser = async (username) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}`);

    setUser(res.data);
    setLoading(false);
  }

  const getUserRepos = async username => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc`);

    setRepos(res.data);
    setLoading(false);
  }

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  }

  const showAlert = (message, type) => {
    setAlert({ message, type });

    setTimeout(() => setAlert(null), 2000);
  }

  return (
    <Router>
      <div className="App">
        <NavBar title="GitHub Finder" icon="fab fa-github" />
        <div className="container">
          <Alert alert={alert} />
          <Routes>
            <Route exact path="/" element={(
              <Fragment>
                <Search searchUsers={searchUsers} clearUsers={clearUsers} showClear={users.length > 0}
                  setAlert={showAlert} />
                <Users loading={loading} users={users} />
              </Fragment>
            )} />
            <Route exact path="/about" element={<About />} />
            <Route path="/users/:login"
              element={
                <User
                  getUser={getUser}
                  getUserRepos={getUserRepos}
                  user={user}
                  repos={repos}
                  loading={loading} />} />
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;
