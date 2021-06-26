import React, { ChangeEvent } from 'react';
import useStyles from './css/TextInput.css';

interface TextInputProps {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const TextInput: React.FC<TextInputProps> = ({ label, id, name, value, placeholder, onChange }) => {
  const styles = useStyles();
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type='text' onChange={onChange} name={name} placeholder={placeholder} value={value} />
    </div>
  );
};

export default TextInput;
