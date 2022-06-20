import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = ({ getUser, user: { name } }) => {
    const { login } = useParams();

    useEffect(() => {
        getUser(login);
    }, [login, getUser]);

    return <div>{name}</div>
}

export default User;