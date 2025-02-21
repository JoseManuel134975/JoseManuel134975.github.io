import React, { useEffect } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import { getAPI } from '../utils/getAPI';
import { API_ENDPOINT_PRODUCTS } from '../utils/urlsAPI';
import { limit } from '../utils/limitProducts';

export default function Footer({ setProducts, pagination, setPagination }) {
  const handleOnClickNext = () => {
    if(pagination.currentPage < pagination.totalPages) {
        setPagination({...pagination, 
            currentPage: pagination.currentPage + 1,
            totalPages: pagination.totalPages
        })
    }
  }

  const handleOnClickPrevious = () => {
    if(pagination.currentPage > 1) {
        setPagination({...pagination, 
            currentPage: pagination.currentPage - 1,
            totalPages: pagination.totalPages
        })
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAPI(`${API_ENDPOINT_PRODUCTS}`)
      const startIndex = (pagination.currentPage - 1) * limit;
      const endIndex = startIndex + limit;
      const products = data.slice(startIndex, endIndex)
      setProducts([...products])
    }
    fetchData()
  }, [pagination.currentPage])

  return (
    <>
      <Pagination>
        <Pagination.Prev onClick={handleOnClickPrevious} />
        <Pagination.Item>{pagination.currentPage}/{pagination.totalPages}</Pagination.Item>
        <Pagination.Next onClick={handleOnClickNext} />
      </Pagination>
    </>
  )
}
