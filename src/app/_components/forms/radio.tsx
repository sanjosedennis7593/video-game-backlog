'use client'
import React from 'react';

type Props = {
    label: string
    name: string
    checked?: boolean
    onChange: React.ChangeEvent<HTMLInputElement>
}

const RadioButton = (props: Props) => {
    const { onChange, checked = false, label = '', name = '' } = props;

    return <div className="form-control">
    <label className="label cursor-pointer justify-start">
      <input onChange={onChange} type="radio" name={name} className="radio radio-primary" checked={checked} />
      <span className="label-text px-1">{label}</span> 
    </label>
  </div>
};

export default RadioButton;