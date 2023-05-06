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
        //eslint-disable-next-line
    }, [title, price, brand]);

    return editModalOpen ? (
        <form onSubmit={handleSaveEdit} id="myModal" className="modal">
            <div className="modal-content">
                <div className="input-label">
                    <h4>Title</h4>  
                    <input required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="input-edit"
                        type="text"
                    />
                </div>
                <div className="input-label">
                    <h4>Price</h4>
                    <input required
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="input-edit"
                        type="number"
                        
                    />
                </div>
                <div className="input-label">
                    <h4>Brand</h4>
                    <input required
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
                    <button className="edit-btn save">
                        save
                    </button>
                </div>
            </div>
        </form>
    ) : (
        ""
    );
};

export default EditModal;
