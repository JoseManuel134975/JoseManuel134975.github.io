import React, { useEffect, useState } from "react";

export default function Pagination({
  pagination,
  setPagination,
  products,
  setProducts,
  allProducts,
  setAllProducts,
}) {
  const [toIndex, setToIndex] = useState(20);
  const [isNext, setIsNext] = useState(false);
  //   const [toPreviousIndex, setToPreviousIndex] = useState(10);

  const handleOnClickNext = (event) => {
    if (pagination.currentPage < pagination.totalPages) {
      setPagination({ ...pagination, currentPage: pagination.currentPage + 1 });
      setIsNext(true);
      if (toIndex < allProducts.length) {
        setToIndex(toIndex + 10);
      }
    }
  };

  const handleOnClickPrevious = (event) => {
    if (pagination.currentPage > 1) {
      setPagination({ ...pagination, currentPage: pagination.currentPage - 1 });
      setIsNext(false);
      setToIndex(toIndex - 10);
    }
  };

  useEffect(() => {
    async function fetchData() {
      setPagination({
        ...pagination,
        totalPages: pagination.totalPages + allProducts.length / toIndex + 1,
      });
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      let newProducts = [];
      if (isNext) {
        newProducts = allProducts.slice(products.length, toIndex);
      } else {
        newProducts = allProducts.slice(allProducts.length, toIndex);
      }
      setProducts([...newProducts]);
    }
    fetchData();
  }, [pagination.currentPage]);

  return (
    <>
      {console.log(products)}
      <nav className="d-flex flex-row align-items-center justify-content-center">
        <button onClick={handleOnClickPrevious}>Anterior</button>
        <b>
          {pagination.currentPage}/{pagination.totalPages}
        </b>
        <button onClick={handleOnClickNext}>Siguiente</button>
      </nav>
    </>
  );
}
