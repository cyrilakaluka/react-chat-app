import { createUseStyles } from 'react-jss';

export interface StyleProps {
  isCurrentUser: boolean;
}

export default createUseStyles(
  {
    container: ({ isCurrentUser }: StyleProps) => ({
      display: 'flex',
      justifyContent: isCurrentUser ? 'flex-end' : 'flex-start',
    }),
    messageBox: ({ isCurrentUser }: StyleProps) => ({
      padding: 10,
      backgroundColor: isCurrentUser ? '#B445F6' : '#12121215',
      borderRadius: 7,
      color: isCurrentUser ? '#f4f4f4' : '#121212',
      fontSize: '0.9rem',
      width: 'max-content',
      maxWidth: '500px',
    }),
    userName: {
      color: 'orange',
      fontWeight: 'bold',
    },
  },
  { name: 'ChatMessage' }
);
