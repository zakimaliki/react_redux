import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from '../../pages/Home.jsx'
import ProuductList from '../../pages/ProductList.jsx'
import Product from '../../pages/Product.jsx'
import ProductDetail from '../../pages/ProductDetail.jsx'
import Page404 from '../../pages/Page404.jsx'
import Counter from "../../pages/Counter.jsx";
import Todo from "../../components/Todo/index.jsx";
import Login from "../../pages/auth/Login/index.jsx";
import RequireAuth from "../../components/RequireAuth/index.jsx";


const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true" />} />
          <Route path="/home" element={<RequireAuth><Home/></RequireAuth>} />
          <Route path="/product-list" element={<ProuductList/>} />
          <Route path="/product" element={<Product />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
