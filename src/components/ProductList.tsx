import React from 'react';
import Link from 'next/link';

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: {
        id: number;
        image: string;
        name: string;
    };
};

type ProductListProps = {
    products: Product[];
};

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    if (!products || products.length === 0) {
        return <div>No products available</div>;
    }

    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product">
                    <h2>
                        <Link href={`/${product.id}`}>
                            {product.title}
                        </Link>
                    </h2>
                    <img src={product.category.image} alt={product.title} />
                    <p>{product.description}</p>
                    <p>Price: {product.price}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
