import React from "react"
import ProductListSingle from "./ProductListSingle"
import Pagination from "./Pagination"

function ProductList({ products }) {
    return (
        <div className="flex flex-col gap-4">
            {products.map((product) => (
                <ProductListSingle key={product.id} product={product} />
            ))}
            <div className="mt-6 flex">
                <Pagination />
            </div>
        </div>
    )
}

export default ProductList
