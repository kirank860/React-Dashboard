import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const Pagination = () => {
  return (
    <div class="pagination-container">

    <div class="pagination-controls-desktop">
      <nav class="pagination-links">
        <a href="/" class="pagination-link">&laquo; Previous</a>
        <a href="/" class="pagination-link pagination-link-current">1</a>
        <a href="/" class="pagination-link">2</a>
        <a href="/" class="pagination-link pagination-hidden-md">3</a>
        {/* <span class="pagination-dots">...</span> */}
        <a href="/" class="pagination-link pagination-hidden-md">8</a>
        <a href="/" class="pagination-link">9</a>
        <a href="/" class="pagination-link">Next &raquo;</a>
      </nav>
    </div>
  </div>
  );
};

export default Pagination;
