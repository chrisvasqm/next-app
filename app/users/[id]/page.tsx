import React from 'react'

interface Props {
    params: { id: number }
}

const UserDetailPage = ({ params }: Props) => {
    const { id } = params;

    return (
        <div>UserDetailPage {id}</div>
    )
}

export default UserDetailPage