import React, { useContext, useEffect } from "react";
import { Context } from "./../context/Context";
import "./../styles/Pagination.css";
const Pagination = () => {
    
    const { data, number, setNumber, currentPageNumber, setCurrentPageNumber } =
        useContext(Context);
    const handleSelectChange = (e) => {
        setNumber(e.target.value);
    };
    const onNext = () => {
        setCurrentPageNumber(currentPageNumber + 1);
    };
    const onPrevious = () => {
        setCurrentPageNumber(currentPageNumber - 1);
    };
    const totalPageCount = Math.ceil(data.length / number);
    // console.log(totalPageCount);
    const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className="pagination">
            <div className="dropdown-menu">
                <select
                    className="select-menu"
                    onChange={handleSelectChange}
                    name="cars"
                    id="cars"
                    value={number}
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <button
                    onClick={onPrevious}
                    className={
                        currentPageNumber === 1
                            ? "disable prev-btn"
                            : "prev-btn"
                    }
                >
                    Prev
                </button>
                <button
                    onClick={onNext}
                    className={
                        totalPageCount === currentPageNumber
                            ? "disable next-btn"
                            : "next-btn"
                    }
                >
                    next
                </button>
            </div>
        </div>
    );
};

export default Pagination;
