import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';

import { JobList } from '../../components';

import svg from '../../images/sprite.svg';
import s from './PaginatedList.module.css';

const PaginatedList = () => {
  const { items, perPage } = useSelector(state => state.jobs);

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + perPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / perPage);

  const handlePageClick = e => {
    const newOffset = (e.selected * perPage) % items.length;
    setItemOffset(newOffset);
  };

  const nextLabel = (
    <svg className={s.icon} width="14" height="14">
      <use href={`${svg}#icon-ArrowRight`}></use>
    </svg>
  );

  const previousLabel = (
    <svg className={s.icon} width="14" height="14">
      <use href={`${svg}#icon-ArrowLeft`}></use>
    </svg>
  );

  return (
    <div>
      <JobList currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel={nextLabel}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={previousLabel}
        renderOnZeroPageCount={null}
        className={s.pagination}
        pageClassName={s.page}
        pageLinkClassName={s.link}
        activeClassName={s.active}
        previousClassName={s.previousPage}
        nextClassName={s.nextPage}
      />
    </div>
  );
};

export default PaginatedList;
