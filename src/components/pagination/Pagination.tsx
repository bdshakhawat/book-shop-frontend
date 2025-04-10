type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage: number;
  onItemsPerPageChange: (value: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  onItemsPerPageChange,
}: PaginationProps) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const perPageOptions = [8, 12, 24, 50,100];

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      {/* Prev Button */}
      <button
        className="px-2 py-1 border rounded disabled:opacity-50"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        &lt;
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`px-3 py-1 border rounded ${
            page === currentPage
              ? "border-black font-semibold"
              : "hover:bg-gray-100"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        className="px-2 py-1 border rounded disabled:opacity-50"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        &gt;
      </button>

      {/* Items per page dropdown */}
      <select
        value={itemsPerPage}
        onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
        className="ml-4 border rounded px-2 py-1 text-sm"
      >
        {perPageOptions.map((option) => (
          <option key={option} value={option}>
            {option} / page
          </option>
        ))}
      </select>
    </div>
  );
};

export default Pagination;
