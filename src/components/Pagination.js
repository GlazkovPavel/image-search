import React from "react";

export function Pagination(props) {
  return(
      <div className="pagination">
        {props.pages.map((pageId, index) => <span
            key={index}
            className={props.page === pageId ? "pagination__current-page" : "pagination__page"}
            onClick={() => props.setPage(pageId)}>{pageId}</span>)}
      </div>
  )
}

