// import usePagination from "./usePagination";

// const Pagination = ({ pagination, onPageChange }) => {
//   const {
//     endIndex,
//     hasNext,
//     numberOfResults,
//     startIndex,
//     currentPage
//   } = pagination;

//   const pageRange = usePagination({
//     endIndex,
//     hasNext,
//     numberOfResults,
//     startIndex,
//     currentPage
//   })

//   if (numberOfResults <= 9) {
//     return null;
//   }

//   const onNext = () => {
//     onPageChange(currentPage + 1);
//   };

//   const onPrevious = () => {
//     onPageChange(currentPage - 1);
//   };

//   return (
//     <ul>
//       <li>
//         <button
//           onClick={onPrevious}
//           disabled={currentPage === 1 ? true : false}
//         >
//           Prev
//         </button>
//       </li>
//       {pageRange.map((pageNumber, index) => {
//         return (
//           <li
//             key={index}
//             className={pageNumber === currentPage ? 'text-bold' : ''}>
//             {pageNumber}
//           </li>
//         )
//       })}
//       <li>
//         <button
//           onClick={onNext}
//           disabled={hasNext ? false : true}
//         >
//           Next
//         </button></li>
//     </ul>
//   )
// }

// export default Pagination;