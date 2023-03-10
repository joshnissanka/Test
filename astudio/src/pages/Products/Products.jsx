import React from "react";
import { ProductsEntries } from "../../components";
import { useStateContext } from "../../context/ContextProvider";
import RightArrow from "../../icons/right.svg";
import LeftArrow from "../../icons/left.svg";

const Products = () => {
  const { products, pageSize, currentPage, setCurrentPage } = useStateContext();

  const pageCount = Math.ceil(products.length / pageSize);
  const pages = [...Array(pageCount).keys()].map((i) => i + 1);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const productsDAta = products
    .slice((currentPage - 1) * pageSize, currentPage * pageSize)
    .map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.title}</td>
          <td>{item.description}</td>
          <td>{item.price}</td>
          <td>{item.discountPercentage}</td>
          <td>{item.rating}</td>
          <td>{item.stock}</td>
          <td>{item.brand}</td>
          <td>{item.category}</td>
        </tr>
      );
    });
  const nextPage = () => {
    currentPage < pages.length
      ? setCurrentPage(currentPage + 1)
      : setCurrentPage(1);
  };

  const prevPage = () => {
    currentPage > 1
      ? setCurrentPage(currentPage - 1)
      : setCurrentPage(pages.length);
  };
  return (
    <div>
      <ProductsEntries />
      <div className="container table-center">
        <table>
          <thead>
            <tr>
              <td>title</td>
              <td>description</td>
              <td>price</td>
              <td>discount Percentage</td>
              <td>rating</td>
              <td>stock</td>
              <td>brand</td>
              <td>category</td>
            </tr>
          </thead>
          <tbody>{productsDAta}</tbody>
        </table>
        <div className="pagination">
          <button onClick={prevPage} className="btn-icon">
            <img src={LeftArrow} alt="left-arrow" />
          </button>
          {pages.map((page, index) => (
            <button
              className={page === currentPage ? "active" : ""}
              key={index}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </button>
          ))}
          <button onClick={nextPage} className="btn-icon">
            <img src={RightArrow} alt="right-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
