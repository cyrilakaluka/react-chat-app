import { createUseStyles } from 'react-jss';

export default createUseStyles(
  {
    container: {
      flex: '1 0 70%',
      padding: 10,
      gap: 10,
      height: '80%',
    },
    scrollViewer: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
    },
  },
  { name: 'ChatMessages' }
);
