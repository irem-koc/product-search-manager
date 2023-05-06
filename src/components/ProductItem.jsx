import React from "react";
import { Link } from "react-router-dom";
import "./../styles/ProductItem.css";
const ProductItem = ({ product }) => {
    return (
        <div className="productItem">
            <div className="image-brand">
                <div className="imagee">
                    <img loading="lazy" src={product.thumbnail} alt={product.description} />
                </div>
                <Link className="linkk" to={`/products/${product.id}`}>
                    {product.title}
                </Link>
            </div>
            <div className="text">
                {product.description.substr(0, 60) + "..."}
            </div>
        </div>
    );
};

export default ProductItem;
