'use client'

type Props = {
    placeholder: string
    label: string
    name?: string
    type: string
}

const Input = (props: Props) => {
    const { label, placeholder, type, name = '' } = props;

    return <div className="form-control">
        <label className="label">
            <span className="label-text">{label}</span>
        </label>
        <input name={name} type={type} placeholder={placeholder} className="input input-bordered" />
    </div>
};

export default Input