import React from 'react'
import { Link } from "gatsby"

const Paginate = props => {
const currentPage  = props.currentPage
const numPages  = props.numPages
const path = props.path

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages

  const prevPage =
    currentPage - 1 === 1 ? `/${path}/` : `/${path}/${currentPage - 1}`
  const nextPage = `/${path}/${currentPage + 1}`
  const firstPage = `/${path}/`
  const lastPage = `/${path}/${numPages}`

  //console.log('From Pagination Page ',numPages)
  //console.log('From Pagination Page ',currentPage)
    return (
      <div className="col-lg-12 col-md-12">
        <div className="pagination-area text-center">
        {/* {!isFirst && (
            <Link to={firstPage}>
              First
            </Link>
          )} */}
          {!isFirst && (
            <Link to={prevPage} className="prev page-numbers">
              <i className='bx bx-chevrons-left'></i>
            </Link>
          )}

          {Array.from({ length: numPages }, (_, i) => {
            if(i + 1 === currentPage){
              return <span className="page-numbers current" aria-current="page">{currentPage}</span>
            }
            else
            {
              return (
                <Link
                  key={i}
                  fade
                  to={`/${path}/${i === 0 ? "" : i + 1}`}
                  className="page-numbers"
                >
                  {i + 1}
                </Link>
              )
            }
            
          })}
          {!isLast && (
            <Link to={nextPage} className="next page-numbers">
              <i className='bx bx-chevrons-right'></i>
            </Link>
          )}
          {/* {!isLast && (
            <Link to={lastPage}>
              Last
            </Link>
          )} */}
          </div>
        </div>
    )
}

export default Paginate