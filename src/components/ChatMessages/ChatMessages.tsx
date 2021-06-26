import React from 'react';
import { useContext } from 'react';
// @ts-ignore
import ScrollToBottom from 'react-scroll-to-bottom';
import { IUser } from '../../Shared/interfaces';
import { StoreContext } from '../../Shared/StoreContext';
import ChatMessage from '../ChatMessage/ChatMessage';
import useStyles from './ChatMessages.css';

interface ChatMessagesProps {
  currentUser: IUser | null;
}

export const ChatMessages: React.FC<ChatMessagesProps> = ({ currentUser }) => {
  const styles = useStyles();
  const { messages } = useContext(StoreContext);
  return (
    <ScrollToBottom className={styles.container} scrollViewClassName={styles.scrollViewer}>
      {messages.map((message, index) => (
        <div key={index}>
          <ChatMessage message={message} isCurrentUser={message.user.id === currentUser?.id} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

export default ChatMessages;
