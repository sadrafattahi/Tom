import { makeStyles } from '@mui/styles';
import React from 'react';
const useStyle = makeStyles((theme) => ({
    myButton: {
        transitionDuration: '150ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        color: 'white',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        fontWeight: '600',
        fontSize: '0.9em',
        fontFamily: 'inherit',
        lineHeight: '1.5em',
        padding: '0.6em 1.3em',
        backgroundColor: 'rgb(17 24 39)',
        borderColor: 'transparent',
        borderWidth: '1px',
        borderRadius: '0.4em',
        alignItems: 'center',
        display: 'inline-flex',
        // margin: '0 1rem'


    }
}))
export default function Button({ type = 'submit', className = '', processing, children }) {
    const classes = useStyle()
    return (
        <button
            type={type}
            className={
                className + ' ' + classes.myButton
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
