import React from 'react';
import useStyles from './css/Button.css';

interface ButtonProps {
  text: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  width?: 'full' | string | number | null;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, type, ...props }) => {
  const styles = useStyles(props);

  return (
    <button className={styles.button} onClick={onClick} type={type}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  width: null,
  type: undefined,
};

export default Button;
