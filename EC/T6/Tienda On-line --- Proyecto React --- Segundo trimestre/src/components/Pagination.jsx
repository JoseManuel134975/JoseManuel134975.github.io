import { useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { getAPI } from '../utils/getAPI';

function AdvancedExample({ products, setProducts, page, setPage, setAllProducts }) {
    const handleOnClick = (event) => {
        setPage(event.target.id)
    }

    useEffect(() => {
        async function fetchData() {
            const response = await getAPI(`http://localhost:3000/products?_page=${page}&per_page=10`)
            setProducts(response.data)
            setAllProducts(response.data)
        }
        fetchData()
    }, [page])

  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      {products.length > 0 && products.map((element, index) => (
          <Pagination.Item key={index} onClick={handleOnClick} id={index}>{index}</Pagination.Item>
      ))}
      {/* <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item> */}
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default AdvancedExample;