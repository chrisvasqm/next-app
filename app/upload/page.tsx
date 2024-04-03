'use client'

import { CldUploadWidget, CldImage } from 'next-cloudinary'
import { useState } from 'react'

interface CloudinaryInfo {
    public_id: string
}

const UploadPage = () => {
    const [publicId, setPublicId] = useState('');

    return (
        <>
            {publicId && <CldImage src={publicId} width={270} height={180} alt='image' />}
            <CldUploadWidget
                options={{
                    sources: ['local'],
                    multiple: false
                }}
                uploadPreset='fx4d7cvk'
                onUpload={(result, widget) => {
                    if (result.event !== 'success') return;
                    const info = result.info as CloudinaryInfo;
                    setPublicId(info.public_id)
                }}>
                {({ open }) =>
                    <button
                        className='btn btn-primary'
                        onClick={() => open()}>
                        Upload file
                    </button>}
            </CldUploadWidget >
        </>
    )
}

export default UploadPage