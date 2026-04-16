export type ApiResponsePagination = {
  pagination: Pagination;
};

export type Pagination = {
  currentPage: number;
  limit: number;
  totalDocs: number;
  totalPages: number;
  next: number;
};
