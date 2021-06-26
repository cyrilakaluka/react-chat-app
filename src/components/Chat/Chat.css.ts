import { createUseStyles } from 'react-jss';

export default createUseStyles(
  {
    container: {
      width: '100%',
      height: '100%',
      padding: 100,
    },

    chatWindow: {
      display: 'flex',
      alignItems: 'stretch',
      height: '80%',
      boxShadow: '1px 1px 10px 5px rgba(0, 0, 0, 0.1)',
      '& .left-panel': {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'stretch',
      },
      '& .right-panel': {
        display: 'flex',
        flexDirection: 'column',
        flex: '2.3',
        backgroundColor: '#f4f4f4',
      },
      '& .room': {
        backgroundColor: '#B445F6',
        color: '#f4f4f4',
        padding: '40px 20px',
        fontSize: '1.5rem',
      },
      '& .users': {
        backgroundColor: '#EA3D85',
        flex: 1,
        overflowX: 'hidden',
        overflowY: 'auto',
        listStyleType: 'none',
        color: '#f4f4f4',
        padding: '10px 20px',
      },
    },
    statusIndicator: {
      display: 'inline-block',
      width: 10,
      height: 10,
      borderRadius: '50%',
      backgroundColor: 'green',
      marginRight: 5,
    },
  },
  { name: 'Chat' }
);
