import React, { useContext, useEffect } from "react";
import ContextProvider, { Context } from "./context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import Homepage from "./components/Homepage";
import ProductDetail from "./components/ProductDetail";

function App() {
    const { data, number, setNumber, setCurrentPageNumber } =
        useContext(Context);

    useEffect(() => {
        setNumber(10);
        setCurrentPageNumber(1);
    }, [window.location.href, number]);

    return (
        <BrowserRouter>
            <ContextProvider>
                <Header />
                <Routes>
                    <Route element={<Homepage />} path="/" exact />
                    <Route path="/products" element={<Products />} />
                    {data.map((product) => (
                        <Route
                            key={product.id}
                            path={`/products/${product.id}`}
                            element={<ProductDetail product={product} />}
                        />
                    ))}
                </Routes>
            </ContextProvider>
        </BrowserRouter>
    );
}

export default App;
