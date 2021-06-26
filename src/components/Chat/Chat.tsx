import React, { useState, useEffect, useContext, useRef } from 'react';
import queryString from 'query-string';
import { RouteComponentProps } from 'react-router-dom';
import ChatMessages from '../ChatMessages/ChatMessages';
import ChatInput from '../ChatInput/ChatInput';
import { StoreContext } from '../../Shared/StoreContext';
import useStyles from './Chat.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser } from '@fortawesome/free-solid-svg-icons';
import { IUser } from '../../Shared/interfaces';

interface ChatProps extends RouteComponentProps {}

export const Chat: React.FC<ChatProps> = ({ location }) => {
  const [room, setRoom] = useState<string>('');
  const styles = useStyles();
  const storeContextRef = useRef(useContext(StoreContext));
  const { socket, user, users } = useContext(StoreContext);

  // useEffect for storeContext
  useEffect(() => {
    const { room } = queryString.parse(location.search);
    const { clearMessages, socket } = storeContextRef.current;

    setRoom(room as string);

    return () => {
      socket?.emit('disjoin').off();
      socket?.disconnect();
      clearMessages();
    };
  }, [location.search]);

  // Send message handler
  const sendMessage = (message: string) => {
    socket?.emit('sendMessage', message, () => null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.chatWindow}>
        <div className='left-panel'>
          <div className='room'>
            <FontAwesomeIcon icon={faHouseUser} /> {room}{' '}
          </div>
          <ul className='users'>
            {users.map(user => (
              <li key={user.id}>
                <span className={styles.statusIndicator}></span>
                {user.name[0].toUpperCase() + user.name.substring(1).toLowerCase()}
              </li>
            ))}
          </ul>
        </div>
        <div className='right-panel'>
          <ChatMessages currentUser={user as IUser} />
          <ChatInput sendMessage={sendMessage} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
