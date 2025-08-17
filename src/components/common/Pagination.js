import React from "react";
import {
  PaginationBar,
  PageButton,
} from "../../styles/common/PaginationStyled";

const Pagination = ({ page, pageCount, onChange }) => {
  if (pageCount <= 1) return null;
  const go = (p) => onChange?.(p);

  return (
    <PaginationBar>
      <PageButton
        disabled={page === 1}
        onClick={() => go(Math.max(1, page - 1))}
      >
        {"<"}
      </PageButton>
      {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
        <PageButton key={p} $active={p === page} onClick={() => go(p)}>
          {p}
        </PageButton>
      ))}
      <PageButton
        disabled={page === pageCount}
        onClick={() => go(Math.min(pageCount, page + 1))}
      >
        {">"}
      </PageButton>
    </PaginationBar>
  );
};

export default Pagination;
