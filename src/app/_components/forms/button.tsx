'use client'

import React from 'react';

type ButtonStyle = 'primary' | 'secondary' | 'access' | 'info' | 'success' | 'warning' | 'error' | undefined;

type Props = {
    buttonStyle?: ButtonStyle | undefined
    customClass?: string | undefined
    children: string | React.ReactNode | undefined
    disabled?: boolean
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    type?: "button" | "submit" | "reset" | undefined
};

const Button = (props: Props) => {
    const {
        onClick,
        type,
        buttonStyle = 'primary',
        customClass = '',
        children = '',
        disabled
    } = props;

    return <button
        type={type}
        onClick={onClick}
        className={`btn btn-${buttonStyle} ${customClass}`}
        disabled={disabled}>
        {children}
    </button>
};

export default Button;