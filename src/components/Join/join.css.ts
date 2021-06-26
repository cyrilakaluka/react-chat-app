import { createUseStyles } from 'react-jss';

export default createUseStyles(
  {
    container: {
      padding: '100px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      height: '100%',
      '& > *': {
        flex: '1',
        minWidth: 500,
      },
      '@media (max-width: 1000px)': {
        flexDirection: 'column-reverse',
        justifyContent: 'center',
      },
    },

    signIn: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: 'white',
      '& .wrapper': {
        width: 'clamp(300px, 100%, 400px )',
      },
      '& h1': {
        textAlign: 'center',
      },
      '& button': {
        marginTop: 20,
      },
    },

    illustration: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem',
      backgroundImage: 'linear-gradient(to bottom right, #B445F6, #EA3D85)',
      padding: '40px',
      '& img': {
        width: '100%',
      },
      '& p': {
        color: '#f4f4f4',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        textAlign: 'center',
      },
    },
  },
  { name: 'Join' }
);
