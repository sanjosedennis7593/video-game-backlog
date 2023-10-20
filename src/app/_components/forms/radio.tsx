'use client'
import React from 'react';

type Props = {
  label: string
  name: string
  checked?: boolean
  value: string | number | undefined
  onChange: (value: any) => void;
}

const RadioButton = (props: Props) => {
  const { onChange, value, checked = false, label = '', name = '' } = props;

  const handleChange = () => {
    onChange(value);
  };

  return <div className="form-control">
    <label className="label cursor-pointer justify-start">
      <input
        onChange={handleChange}
        type="radio"
        name={name}
        className="radio radio-primary"
        checked={checked}
        value={value}
      />
      <span className="label-text px-1">{label}</span>
    </label>
  </div>
};

export default RadioButton;