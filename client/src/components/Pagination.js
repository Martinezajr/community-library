import React from 'react';
import Nav from 'react-bootstrap/Nav'
//PAGINATION BAR ONLY
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    
      <Nav className='justify-content-center' style = {{left: "50%"}}>
        <ul className='pagination text-align-center ' style = {{ textAlign : 'center'}}>
          {pageNumbers.map(number => (
            <li key={number} className='page-item'>
              <a onClick={() => paginate(number)} href='#' className='page-link'>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </Nav>
    
  );
};

export default Pagination;
