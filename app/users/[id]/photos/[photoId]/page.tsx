import React from 'react'

interface Props {
    params: {
        id: number,
        photoId: number
    }
}

const PhotoDetailPage = ({ params }: Props) => {
    const { id, photoId } = params;

    return (
        <div>PhotoDetailPage {id} {photoId}</div>
    )
}

export default PhotoDetailPage