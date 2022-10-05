import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../store/action-creators/users";


const UserList = () => {
    const {users, loading, error} = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>ERROR</div>
    }

    return (
        <div>
            {
                users.map(u =>
                    <div key={u.id}>{u.name}</div>
                )
            }
        </div>
    );
};

export default UserList;