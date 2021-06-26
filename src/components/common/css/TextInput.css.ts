import { createUseStyles } from 'react-jss';

export default createUseStyles(
  {
    wrapper: {
      marginTop: '0.8rem',
      display: 'flex',
      flexDirection: 'column',
      '& input': {
        padding: '10px 15px',
        borderRadius: '50px',
        borderColor: 'rgba(0, 0, 0, 0.2)',
        outline: 'none',
        fontSize: 'inherit',
      },
      '& label': {
        fontWeight: 'bold',
        marginBottom: '0.2rem',
      },
    },
  },
  { name: 'text-input' }
);
