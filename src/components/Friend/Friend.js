import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { name, email, id } = props.friend;
    const history = useHistory();
    const handleClick = (friendId) => {
        const url = `/friend/${friendId}`
        history.push(url);
    }
    const friendStyle = {
        border: '1px solid blue',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={friendStyle}>
            <h1>{name}</h1>
            <p>{email}</p>
            <Link to={`/friend/${id}`}> show detail of {id}</Link><br/>
            <button onClick={() => handleClick(id)}>Show detail</button>
        </div>
    );
};

export default Friend;