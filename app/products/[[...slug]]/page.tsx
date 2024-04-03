import React from 'react'

interface Props {
    params: { slug: string[] },
    searchParams: { sortOrder: string }
}

const ProductsPage = ({ params: { slug }, searchParams: { sortOrder } }: Props) => {
    return (
        <div>ProductsPage {slug} {sortOrder}</div>
    )
}

export default ProductsPage