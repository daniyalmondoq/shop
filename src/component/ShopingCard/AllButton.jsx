import React from "react";


function AllButton(props) {
  return (
    <>
    <div class="d-flex justify-content-center">
    <button
        className="btn btn-outline-info mx-3"
        disabled={props.currentPage === 1}
        onClick={() => {
          props.setCurrentPage(1);
        }}
      >
        First
      </button>
      <button
        className="btn btn-outline-info mx-3"
        disabled={props.currentPage === 1}
        onClick={() => {
          props.setCurrentPage(props.currentPage - 1);
        }}
      >
        Previos
      </button>
      
      <button
        className="btn btn-outline-info mx-3"
        disabled={props.currentPage === props.totalPage}
        onClick={() => {
          props.setCurrentPage(props.currentPage + 1);
        }}
      >
        Next
      </button>
      

      <button
        className="btn btn-outline-info mx-3"
        disabled={props.currentPage === props.totalPage}
        onClick={() => {
          props.setCurrentPage(props.totalPage);
        }}
      >
        Last
      </button>
    </div>
      
    </>
  );
}

export default AllButton;
