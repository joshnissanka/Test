import React from 'react'
import SearchIcon from "../../icons/search.svg";
import { useStateContext } from "../../context/ContextProvider";

const entries = [5, 10, 20, 50];

const ProductsEntries = () => {
      const {
        setPageSize,
        isActive,
        setIsActive,
        products,
        searchInput,
        setSearchInput,
      } = useStateContext();

      const changePageSize = (pageSize) => {
        setPageSize(pageSize.target.value);
      };

      const hideInputSearch = (e) => {
        e.preventDefault();
        setIsActive(!isActive);
      };

      const titleList = products.map((item, index) => (
        <option key={index} value={item.title}>
          {item.title}
        </option>
      ));
      const brandList = products.map((item, index) => (
        <option key={index} value={item.brand}>
          {item.brand}
        </option>
      ));
      const categoryList = products.map((item, index) => (
        <option key={index} value={item.category}>
          {item.category}
        </option>
      ));
  return (
    <div className="filters">
      <div className="container">
        <form>
          <div className="entries">
            <select
              onChange={changePageSize}
              className="select-entry"
              name="pageSize"
            >
              {entries.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <label>Entries</label>
          </div>
          <div className="search">
            <input
              type="search"
              className={`${isActive ? "" : "hide"} input-search`}
              placeholder="search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="btn-icon" onClick={hideInputSearch}>
              <img className="search-icon" src={SearchIcon} alt="search" />
            </button>
          </div>
          <div className="select-options">
            <select>
              <option value="">Title</option>
              {titleList}
            </select>
            <select>
              <option value="">Brand</option>
              {brandList}
            </select>
            <select>
              <option value="">Category</option>
              {categoryList}
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductsEntries