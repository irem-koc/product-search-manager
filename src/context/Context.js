import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [number, setNumber] = useState(10);
    const [currentPageNumber, setCurrentPageNumber] = useState(1);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => setData(data.products));
    }, []);

    const values = {
        data,
        setData,
        editModalOpen,
        setEditModalOpen,
        number,
        setNumber,
        currentPageNumber,
        setCurrentPageNumber,
        isLoaded,
        setIsLoaded,
        addModalOpen,
        setAddModalOpen,
    };
    return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default ContextProvider;
