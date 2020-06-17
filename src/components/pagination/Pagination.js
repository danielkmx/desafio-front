import React, { useState } from "react";
import "./Pagination.css";

const Pagination = ({
  page,
  totalItem = 964,
  rowsPerPage = 20,
  setPage,
  setOffSet,
}) => {
  console.log("PAGINA   " + page);
  const numberOfPages = Math.floor(totalItem / rowsPerPage);
  const array = [...Array(numberOfPages).keys()].map((i) => i + 1);
  const paginationArray = array.map((element) => {
    return (
      <div
        className="pagination-item"
        onClick={() => {
          setOffSet(element * 20);
          setPage(element);
        }}
      >
        {element}
      </div>
    );
  });

  return (
    <div>
      <div className="pagination-container">
        <div
          onClick={() => {
            console.log(
              "VALOR NEXT PAGE: " +
                nextPageValue(page, "voltar", numberOfPages, array[0])
            );
            setOffSet(
              nextPageValue(page, "voltar", numberOfPages, array[0]) * 20
            );
            setPage(nextPageValue(page, "voltar", numberOfPages, array[0]));
          }}
        >
          Voltar
        </div>
        {paginationArray}
      </div>
      <div
        onClick={() => {
          console.log(
            "VALOR NEXT PAGE:  " +
              nextPageValue(page, "avancar", numberOfPages, array[0])
          );
          setOffSet(
            nextPageValue(page, "avancar", numberOfPages, array[0]) * 20
          );
          setPage(nextPageValue(page, "avancar", numberOfPages, array[0]));
        }}
      >
        Avançar
      </div>
    </div>
  );
};

const nextPageValue = (page, pageDirection, lastPage, firstPage = 1) => {
  if (page === firstPage && pageDirection === "voltar") return page;
  if (page === lastPage && pageDirection === "avancar") return page;

  if (pageDirection === "avancar") return page + 1;
  if (pageDirection === "voltar") return page - 1;
};

export default Pagination;
