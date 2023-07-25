'use client'
import { ChangeEvent } from "react";
type Props = {
    placeholder: string
    label: string
    name?: string
    rows?: number
    type: string
    value?: string | number | undefined
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void 
}

const Input = (props: Props) => {
    const { label, placeholder, rows, type, value, onChange, name = '' } = props;
    return <div className="form-control">
        <label className="label">
            <span className="label-text">{label}</span>
        </label>
        {type === 'textarea' ?
            <textarea
                onChange={onChange}
                value={value}
                name={name}
                placeholder={placeholder}
                rows={rows}
                className="textarea textarea-bordered"
            /> :
            <input
                onChange={onChange}
                value={value}
                name={name}
                type={type}
                placeholder={placeholder}
                className="input input-bordered"
            />}

    </div>
};

export default Input;