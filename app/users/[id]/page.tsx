import { notFound } from 'next/navigation';
import React from 'react'

interface Props {
    params: { id: number }
}

const UserDetailPage = ({ params }: Props) => {
    const { id } = params;

    if (id > 10) notFound();

    return (
        <div>UserDetailPage {id}</div>
    )
}

export default UserDetailPage