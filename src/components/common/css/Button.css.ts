import { createUseStyles } from 'react-jss';

export default createUseStyles(
  {
    button: {
      padding: 15,
      width: ({ width }) => (!width ? 'auto' : width === 'full' ? '100%' : width),
      backgroundImage: 'linear-gradient(to right, #B445F6, #EA3D85)',
      borderRadius: 50,
      outline: 'none',
      border: 'none',
      color: '#F4F4F4',
      cursor: 'pointer',
      '&:active': {
        transform: 'translateY(2px)',
      },
    },
  },
  { name: 'Button' }
);
