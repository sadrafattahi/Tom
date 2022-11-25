import { makeStyles } from '@mui/styles';
import React, { useEffect, useRef } from 'react';

const useStyle = makeStyles((theme) => ({
    myInput: {
        fontSize: '1em',
        fontWeight: '400',
        padding: '0.6em 1em',
        borderWidth: '1px',
        boxShadow: '0 1px 2px #367cf2',
        borderRadius: '0.25em',
        borderColor: '#bfd1ef',
        fontFamily: 'roboto',
        appearance: 'none',
        '&:focus': {
            boxShadow: '2px 2px 5px 0px #367cf2',
        }

    }
}))

export default function Input({
    type = 'text',
    name,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
}) {
    const input = useRef();
    const classes = useStyle()
    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <input
                type={type}
                name={name}
                value={value}
                className={
                    classes.myInput + ' ' +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
}
