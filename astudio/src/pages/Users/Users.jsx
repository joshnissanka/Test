import React from "react";
import { Filters } from "../../components";
import { useStateContext } from "../../context/ContextProvider";
import RightArrow from "../../icons/right.svg";
import LeftArrow from "../../icons/left.svg";
import "./users.css";

const Users = () => {
  const {
    users,
    pageSize,
    currentPage,
    setCurrentPage,
    searchInput,
  } = useStateContext();

  const pageCount = Math.ceil(users.length / pageSize);
  const pages = [...Array(pageCount).keys()].map((i) => i + 1);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  if (searchInput) {
  }

  let usersData = users
    .slice((currentPage - 1) * pageSize, currentPage * pageSize)
    .map((item, index) => (
      <tr key={index}>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.maidenName}</td>
        <td>{item.age}</td>
        <td>{item.gender}</td>
        <td>{item.email}</td>
        <td>{item.username}</td>
        <td>{item.bloodGroup}</td>
        <td>{item.eyeColor}</td>
        <td>{item.height}</td>
        <td>{item.weight}</td>
        <td>{item.domain}</td>
      </tr>
    ));

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
      <Filters />
      <div className="container table-center">
        <table>
          <thead>
            <tr>
              <td>first name</td>
              <td>last name</td>
              <td>maiden name</td>
              <td>age</td>
              <td>gender</td>
              <td>email</td>
              <td>username</td>
              <td>bloodgroup</td>
              <td>eyecolor</td>
              <td>height</td>
              <td>weight</td>
              <td>domain</td>
            </tr>
          </thead>
          <tbody>{usersData ? usersData : <p>loading...</p>}</tbody>
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

export default Users;
