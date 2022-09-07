// import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ModalCreate from "../components/ModalCreate";
import ModalDelete from "../components/ModalDelete";
import ModalEdit from "../components/ModalEdit";
import { useDispatch, useSelector } from "react-redux";
import getProduct from "../configs/redux/actions/productAction";
const Product = () => {
  const dispatch = useDispatch()
  const {product} = useSelector((state)=>state.product)
  useEffect(()=>{
    dispatch(getProduct())
},[])

  return (
    <div>
      <h1>Product Page</h1>
      <ModalCreate>Create</ModalCreate>
      <table className="table table-bordered">
        <thead>
          <tr className="bg-secondary text-light text-center">
            <th scope="col">NO</th>
            <th scope="col">NAMA</th>
            <th scope="col">STOCK</th>
            <th scope="col">PRICE</th>
            <th scope="col">IMAGE</th>
            <th scope="col">DESCRIPTION</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, index) => (
            <tr key={item.id} className="text-center">
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.stock}</td>
              <td>{item.price}</td>
              <td><a target="_blank" rel="noopener noreferrer" href={item.photo}>{item.photo}</a></td>
              <td>{item.description}</td>
              <td className="text-center">
                <Link to={`${item.id}`}>
                  <button
                    className="btn btn-primary"
                    style={{ marginRight: "10px" }}
                  >
                    Detail
                  </button>
                </Link>
                <ModalEdit
                  id={item.id}
                  name={item.name}
                  stock={item.stock}
                  price={item.price}
                  photo={item.photo}
                  description={item.description}
                >
                  Edit
                </ModalEdit>
                <ModalDelete id={item.id} name={item.name}>
                  Delete
                </ModalDelete>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
