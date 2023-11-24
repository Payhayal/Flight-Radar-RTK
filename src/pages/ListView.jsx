import { useSelector } from "react-redux"
import ReactPaginate from 'react-paginate';
import { useState } from "react";


const ListView = ({openModal}) => {
const store = useSelector((store) => store);
const [itemOffset, setItemOffset] = useState(0);

// sayfa basina eleman sayisi
const itemsPerPage = 10;
// gosterilecek sonuncu elemanin sayisi
const endOffset = itemOffset + itemsPerPage;
// gosterilecek araliktaki elemanlar
const currentItems = store?.flights.slice(itemOffset, endOffset);

// toplam kac sayfa oldugunu hesaplama
const pageCount = Math.ceil(store?.flights.length / itemsPerPage);

const handlePageClick = (event) => {
  // gosterilecek yeni elemanlari hesaplar
  const newOffset = (event.selected * itemsPerPage ) % store?.flights.length;
//state`i gunceller 
  setItemOffset(newOffset);

}

  return (
    <div className="list-page">
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Tail Number</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((flight) => (
            <tr key={flight.id}>
            <td>{flight.id}</td>
            <td>{flight.code}</td>
            <td>{flight.lat}</td>
            <td>{flight.lng}</td>
            <td>
              <button onClick={() => openModal(flight.id)}>Details</button>
            </td>
           
           </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
       breakLabel="..."
       nextLabel="next >"
       onPageChange={handlePageClick}
       pageRangeDisplayed={2}
       pageCount={pageCount}
       previousLabel="< previous"
       renderOnZeroPageCount={null}
       activeClassName="active"
       className="pagination"
      />
    </div>
  )
}

export default ListView