'use client'
import { ChangeEvent } from "react";

type Options = {
    label: string
    value: string | number
}

type Props = {
    placeholder: string
    label?: string
    name?: string
    options: Options[]
    selected?: string | number | undefined
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void 
}

const Select = (props: Props) => {
    const { placeholder, selected, label = '', name = '', options = [], onChange } = props;

    return <div className="form-control">
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <select onChange={onChange} name={name} value={selected} className="select select-bordered">
                <option disabled >{placeholder}</option>
                {options.map((item: Options) => {
                    return <option key={item.value} value={item.value}>{item.label}</option>
                })}
            </select>

        </div>
    </div>
};

export default Select;