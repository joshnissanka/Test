import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const StateContext = createContext();

const ContextProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1)
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=100")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://dummyjson.com/users?limit=100")
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <StateContext.Provider
      value={{
        isActive,
        setIsActive,
        users,
        setUsers,
        products,
        setProducts,
        pageSize,
        setPageSize,
        currentPage,
        setCurrentPage,
        searchInput,
        setSearchInput,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default ContextProvider;

export const useStateContext = () => useContext(StateContext);
