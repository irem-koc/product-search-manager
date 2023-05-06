import React, { useContext, useEffect, useMemo } from "react";
import { Context } from "../context/Context";
import "./../styles/Products.css";
import ProductItem from "./ProductItem";
import Pagination from "./Pagination";
import AddModal from "./AddModal";

const Products = () => {
    const {
        data,
        number,
        setNumber,
        currentPageNumber,
        setCurrentPageNumber,
        setAddModalOpen,
    } = useContext(Context);
    const currentTableData = useMemo(() => {
        const startIndex = (currentPageNumber - 1) * number;
        const endIndex = startIndex + number;
        return data.slice(startIndex, endIndex);
    }, [currentPageNumber, number]);
    useEffect(() => {
        setNumber(10);
        setCurrentPageNumber(1);
    }, [window.location.href]);

    return (
        <div className="products-filters">
            <div className="filters">
                <h2>Products</h2>
                <div>
                    <input className="filter-input" type="text" />
                    <button
                        className="add-btn"
                        onClick={() => setAddModalOpen(true)}
                    >
                        + New
                    </button>
                </div>
            </div>
            <div className="products">
                {currentTableData.slice(0, number).map((prod) => (
                    <div key={prod.id}>
                        <ProductItem product={prod} />
                        <hr />
                    </div>
                ))}
            </div>
            <Pagination />
            <AddModal />
        </div>
    );
};

export default Products;
