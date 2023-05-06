import React, { useContext, useEffect, useState } from "react";
import "./../styles/EditModal.css";
import { Context } from "../context/Context";
const EditModal = ({ product }) => {
    const { data, editModalOpen, setEditModalOpen } = useContext(Context);
    const [title, setTitle] = useState(product.title);
    const [price, setPrice] = useState(product.price);
    const [brand, setBrand] = useState(product.brand);

    const handleSaveEdit = () => {
        product.title = title;
        product.brand = brand;
        product.price = price;
        setEditModalOpen(!editModalOpen);
    };
    useEffect(() => {
        data.find((prod) =>
            prod.id === product.id ? prod.title=title : ""
        );
    }, [title, price, brand]);

    return editModalOpen ? (
        <div id="myModal" className="modal">
            <div className="modal-content">
                {/* <span
                    class="close"
                    onClick={() => setEditModalOpen(!editModalOpen)}
                >
                    &times;
                </span>
                <br /><br /> */}
                <div className="input-label">
                    <h4>Title</h4>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="input-edit"
                        type="text"
                    />
                </div>
                <div className="input-label">
                    <h4>Price</h4>
                    <input
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="input-edit"
                        type="number"
                        
                    />
                </div>
                <div className="input-label">
                    <h4>Brand</h4>
                    <input
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        className="input-edit"
                        type="text"
                    />
                </div>
                <div className="edit-btn-section">
                    <button
                        className="edit-btn cancel"
                        onClick={() => setEditModalOpen(!editModalOpen)}
                    >
                        cancel
                    </button>
                    <button className="edit-btn save" onClick={handleSaveEdit}>
                        save
                    </button>
                </div>
            </div>
        </div>
    ) : (
        ""
    );
};

export default EditModal;
