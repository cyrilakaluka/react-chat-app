import { createUseStyles } from 'react-jss';

export default createUseStyles(
  {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px 10px',
      marginTop: 'auto',
      backgroundColor: '#00000010',
      overflow: 'hidden',
      '& input': {
        flex: 1,
        padding: '10px 15px',
        borderRadius: '50px',
        borderColor: 'rgba(0, 0, 0, 0.2)',
        outline: 'none',
        fontSize: '1rem',
      },
      '& button': {
        border: 'none',
        fontSize: '1.5rem',
        backgroundColor: 'transparent',
        transform: 'rotate(45deg)',
        cursor: 'pointer',
      },
    },
  },
  { name: 'ChatInput' }
);
