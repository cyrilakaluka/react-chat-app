import React from 'react';
import { IChatMessage } from '../../Shared/interfaces';
import useStyles from './ChatMessage.css';

interface ChatMessageProps {
  message: IChatMessage;
  isCurrentUser: boolean;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message: { user, text }, isCurrentUser }) => {
  const styles = useStyles({ isCurrentUser });
  return (
    <div className={styles.container}>
      <div className={styles.messageBox}>
        {!isCurrentUser && <p className={styles.userName}>{user.name}</p>}
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
