import React from "react";
import SearchIcon from "../../icons/search.svg";
import "./entries.css";
import { useStateContext } from "../../context/ContextProvider";

const entries = [5, 10, 20, 50];

const Entries = () => {
  const {
    setPageSize,
    isActive,
    setIsActive,
    users,
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

  const nameList = users.map((item, index) => (
    <option key={index} value={item.firstName}>{item.firstName}</option>
  ));
  const emailList = users.map((item, index) => (
    <option key={index} value={item.email}>
      {item.email}
    </option>
  ));
  const birthDatelList = users.map((item, index) => (
    <option key={index} value={item.birthDate}>
      {item.birthDate}
    </option>
  ));


  return (
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
          <option value="">Name</option>
          {nameList}
        </select>
        <select>
          <option value="">Email</option>
          {emailList}
        </select>
        <select>
          <option value="">Birth Date</option>
          {birthDatelList}
        </select>
        <select>
          <option value="">Gender</option>
          <option value="mail">mail</option>
          <option value="femail">femail</option>
        </select>
      </div>
    </form>
  );
};

export default Entries;
