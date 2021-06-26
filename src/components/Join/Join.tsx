import React, { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import useStyles from './join.css';
import { StoreContext } from '../../Shared/StoreContext';
import { useContext } from 'react';
import io from 'socket.io-client';
import { IUser } from '../../Shared/interfaces';

export const Join: React.FC = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const styles = useStyles();
  const history = useHistory();
  const { setSocket, setUser, addMessage, addUser, removeUser, addUsers, clearUsers } = useContext(StoreContext);
  const ENDPOINT = process.env.REACT_APP_SOCKET_END_POINT as string;

  function handleChange({ target: { name, value } }: ChangeEvent<HTMLInputElement>): void {
    name === 'name' ? setName(value) : setRoom(value);
  }

  function handleSignIn(): void {
    const socket = io(ENDPOINT);
    setSocket(socket);

    socket.on('message', message => addMessage(message));

    socket.on('userJoined', (user: IUser) => addUser(user));

    socket.on('userLeft', user => removeUser(user));

    socket.on('ping', callBack => callBack && typeof callBack === 'function' && callBack());

    socket.emit('join', { name, room }, (payload: { error: string; user: IUser; occupants: IUser[] }) => {
      const { error, user, occupants } = payload;

      if (error) {
        alert(error);
        socket.disconnect().off();
        return;
      }
      clearUsers();
      setUser(user);
      addUsers(occupants);
      history.push(`/chat?name=${name}&room=${room}`);
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.signIn}>
        <div className='wrapper'>
          <h1>Join</h1>
          <TextInput name='name' label='Name' id='nameId' onChange={handleChange} value={name} />
          <TextInput name='room' label='Room' id='roomId' onChange={handleChange} value={room} />
          <Button text='Sign In' width='full' onClick={e => (!name || !room ? e.preventDefault() : handleSignIn())} />
        </div>
      </div>
      <div className={styles.illustration}>
        <img src='signInIllustration.svg' alt='Illustration' />
        <p>
          Socialize and
          <br /> discover new ideas.
        </p>
      </div>
    </div>
  );
};

export default Join;
