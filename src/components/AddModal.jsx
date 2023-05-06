import React, { useContext, useState } from "react";
import "./../styles/AddModal.css";
import { Context } from "../context/Context";
const AddModal = () => {
    const { data, addModalOpen, setAddModalOpen } = useContext(Context);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [discountPercentage, setDiscountPercentage] = useState(0);
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(0);
    const [stock, setStock] = useState(0);
    // const [thumbnail, setThumbnail] = useState(null);
    // const [images, setImages] = useState(null);

    const handleSaveAdd = () => {
        console.log("added");
    };
    return addModalOpen ? (
        <form onSubmit={handleSaveAdd} id="myAddModal" className="add-modal">
            <div className="addmodal-content">
                <div className="input-label">
                    <h4>Title</h4>
                    <input
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="input-add"
                        type="text"
                    />
                </div>
                <div className="input-label">
                    <h4>Description</h4>
                    <input
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="input-add"
                        type="text"
                    />
                </div>
                <div className="input-label">
                    <h4>Brand</h4>
                    <input
                        required
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        className="input-add"
                        type="text"
                    />
                </div>
                <div className="input-label">
                    <h4>Category</h4>
                    <input
                        required
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="input-add"
                        type="text"
                    />
                </div>
                <div className="input-label">
                    <h4>Discount Percentage</h4>
                    <input
                        required
                        value={discountPercentage}
                        onChange={(e) => setDiscountPercentage(e.target.value)}
                        className="input-add"
                        type="number"
                    />
                </div>
                <div className="input-label">
                    <h4>Price</h4>
                    <input
                        required
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="input-add"
                        type="number"
                    />
                </div>
                <div className="input-label">
                    <h4>Rating</h4>
                    <input
                        required
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        className="input-add"
                        type="number"
                    />
                </div>
                <div className="input-label">
                    <h4>Stock</h4>
                    <input
                        required
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                        className="input-add"
                        type="number"
                    />
                </div>
                {/* <div className="input-label">
                    <h4>Thumbnail</h4>
                    <input
                        required
                        value={thumbnail}
                        onChange={(e) => setBrand(e.target.value)}
                        className="input-add"
                        type="file"
                    />
                </div>
                <div className="input-label">
                    <h4>Images</h4>
                    <input multiple
                        required
                        value={images}
                        // onChange={(e) => setBrand(e.target.value)}
                        className="input-add"
                        type="file"
                        accept="image/png, image/jpeg, image/jpg, image/gif "
                    />
                </div> */}
                <div className="add-btn-section">
                    <button
                        className="add-btn cancel"
                        onClick={() => setAddModalOpen(!addModalOpen)}
                    >
                        cancel
                    </button>
                    <button className="add-btn save">save</button>
                </div>
            </div>
        </form>
    ) : (
        ""
    );
};

export default AddModal;
