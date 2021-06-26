import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState } from 'react';
import useStyles from './ChatInput.css';

interface ChatInputProps {
  sendMessage: (message: string) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ sendMessage }) => {
  const [message, setMessage] = useState('');
  const styles = useStyles();

  const handleKeyPress = (e: { key: string; preventDefault: () => void }) => {
    if (e.key !== 'Enter') return;

    e.preventDefault();

    if (message) {
      sendMessage(message);
      setMessage('');
    }
  };

  const handleButtonClick = () => {
    sendMessage(message);
    setMessage('');
  };

  return (
    <div className={styles.container}>
      <input
        type='text'
        placeholder='Type a message'
        onKeyPress={handleKeyPress}
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button title='Send' onClick={handleButtonClick}>
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </div>
  );
};

export default ChatInput;
