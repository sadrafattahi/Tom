import { styled } from '@mui/material/styles';
import React from 'react';

const MyLabel = styled('label')({
    display: 'block',
    color: 'rgb(55 65 81)',
    fontWeight: '600',
    fontSize: '1em',
    lineHeight: '2em',

})

export default function Label({ forInput, value, className, children }) {
    return (
        <MyLabel htmlFor={forInput}
            className={className}>
            {value ? value : children}
        </MyLabel>
    );
}
