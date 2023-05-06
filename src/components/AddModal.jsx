import React, { useContext, useState } from "react";
import "./../styles/AddModal.css";
import { Context } from "../context/Context";
import { useEffect } from "react";
const AddModal = () => {
    const { setData, data, addModalOpen, setAddModalOpen } =
        useContext(Context);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [discountPercentage, setDiscountPercentage] = useState(0);
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(0);
    const [stock, setStock] = useState(0);
    const [thumbnail, setThumbnail] = useState();
    const [images, setImages] = useState([]);
    useEffect(() => {
        setTitle("");
        setDescription("");
        setBrand("");
        setCategory("");
        setDiscountPercentage(0);
        setPrice(0);
        setRating(0);
        setStock(0);
        setThumbnail();
        setImages([]);
    }, [addModalOpen]);
    const handleSaveAdd = (e) => {
        e.preventDefault();
        const new_product = {
            id: data.length+1,
            title: title,
            description: description,
            brand: brand,
            category: category,
            discountPercentage: discountPercentage,
            price: price,
            rating: rating,
            stock: stock,
            thumbnail: thumbnail,
            images: images,
        };
        setData([new_product,...data]);
        setAddModalOpen(!addModalOpen)
    };
    const handleImageUpload = (e) => {
        if (e.target.files && e.target.files[0]) {
            setThumbnail(URL.createObjectURL(e.target.files[0]));
        }
    };
    const handleImagesUpload = (e) => {
        let images = [];
        for (let i = 0; i < e.target.files.length; i++) {
            images.push(URL.createObjectURL(e.target.files[i]));
        }
        setImages(images);
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
                <div className="input-label">
                    <h4>Thumbnail</h4>
                    <input
                        required
                        onChange={handleImageUpload}
                        className="input-add"
                        type="file"
                        accept="image/png, image/jpeg, image/jpg, image/gif "
                    />
                </div>
                <div className="input-label">
                    <h4>Images</h4>
                    <input
                        multiple
                        required
                        onChange={handleImagesUpload}
                        className="input-add"
                        type="file"
                        accept="image/png, image/jpeg, image/jpg, image/gif "
                    />
                </div>
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
