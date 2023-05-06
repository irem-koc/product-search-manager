import React, { useContext } from "react";
import { Context } from "./../context/Context";
import EditModal from "./EditModal";
import "./../styles/ProductDetail.css";
const ProductDetail = ({ product }) => {
    const { setEditModalOpen } = useContext(Context);
    return (
        <div className="details-page">
            <div>
                <div>
                    <div className="button">
                        <button onClick={() => setEditModalOpen(true)}>
                            Edit
                        </button>
                    </div>
                    <div className="detail">
                        <div>
                            <img
                                loading="lazy"
                                src={product.thumbnail}
                                className="image-section"
                                alt={product.description}
                            />
                        </div>
                        <div className="texts">
                            <p>
                                <strong>Brand: {product.brand}</strong>
                            </p>

                            <p>
                                <strong>Title: {product.title}</strong>
                            </p>

                            <p>
                                <strong>Price: {product.price}</strong>
                            </p>
                            <br />
                            <br />
                            <br />
                            <i className="descr">{product.description}</i>
                        </div>
                        <div className="extra-images">
                            {product.images.map((image, i) => {
                                return (
                                    <div key={i}>
                                        <img
                                            src={image}
                                            className="extra-image"
                                            alt={product.description}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <EditModal product={product} />
            </div>
        </div>
    );
};

export default ProductDetail;
