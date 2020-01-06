
import React from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../reducers';

export const Profile = () => {
    const user = useSelector((state: IRootState) => state.user)
    if(!user)
    return (
        <div>

            </div>
    )
}