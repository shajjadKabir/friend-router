import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
        
    },[])
    return (
        <div>
            <h3>This is Friend detail component {friendId}</h3>
            <h3>name : {friend.name}</h3>
            <p>email : {friend.email}</p>
            <p>phone: {friend.phone}</p>
            <p>website : {friend.website}</p>
        </div>
    );
};

export default FriendDetail;