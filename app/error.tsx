'use client'
import React from 'react'

interface Props {
    error: Error,
    reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
    console.log(error);
    return (
        <>
            <div>Unexpected error has ocurred</div>
            <button className='btn' onClick={() => reset()}>Retry</button>
        </>
    )
}

export default ErrorPage