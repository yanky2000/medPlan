import React from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../reducers';

export const Header: React.FC = () => {
  const user = useSelector((state: IRootState) => state.user);

  return <div>{user ? user.firstName : 'anonim'}</div>;
};
