// import { useMemo } from "react";
// const range = (start, end) => {
//   let length = end - start + 1;
//   return Array.from({ length }, (_, i) => i + start);
// }

// const DOTS = "...";

// const usePagination = ({
//   numberOfResults,
//   currentPage
// }) => {
//   const paginationRange = useMemo(() => {
//     const siblingCount = 1;
//     const ITEMS_PER_PAGE = 9;
//     const totalPageCount = Math.ceil(numberOfResults / ITEMS_PER_PAGE);
//     const defaultPageNumber = 5;

//     if (totalPageCount < defaultPageNumber) {
//       return range(1, totalPageCount)
//     }
//     const leftSiblingIndex = Math.max((currentPage) - siblingCount, 1);
//     const rightSiblingIndex = Math.min(
//       (currentPage) + siblingCount,
//       totalPageCount
//     );

//     const firstPageIndex = 1;
//     const lastPageIndex = totalPageCount;

//     const shouldShowLeftDots = leftSiblingIndex > 2;
//     const shouldShowRightDots = rightSiblingIndex <= totalPageCount - 2;

//     if (!shouldShowLeftDots && shouldShowRightDots) {
//       let leftItemCount = 3 * siblingCount;
//       let leftRange = range(1, leftItemCount);

//       return [...leftRange, DOTS, totalPageCount];
//     }

//     if (shouldShowLeftDots && !shouldShowRightDots) {
//       let rightItemCount = 3 * siblingCount;
//       let rightRange = range(
//         totalPageCount - rightItemCount,
//         totalPageCount
//       );
//       return [firstPageIndex, DOTS, ...rightRange];
//     }

//     if (shouldShowLeftDots && shouldShowRightDots) {
//       console.log(currentPage);
//       return [firstPageIndex, DOTS, currentPage, DOTS, lastPageIndex];
//     }
//   }, [numberOfResults, currentPage])
//   return paginationRange;
// }

// export default usePagination;