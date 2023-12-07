// /* eslint-disable react/prop-types */
// /* eslint-disable react/no-unknown-property */
// import { StarIcon } from "@heroicons/react/20/solid";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { getProductDetail } from "../../store/product/action";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// const Modal = (props) => {
//   const { show, handleClose } = props;
//   const { id } = useParams();
//   const { product } = useSelector((state) => state.product);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         await dispatch(getProductDetail(id));
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       }
//     };

//     fetchProducts();
//   }, [dispatch, id]);

//   if (!show || Object.keys(product).length === 0) {
//     return null; // Do not render anything if the modal is not supposed to be visible or if there is no product data
//   }

//   return (
//     <div className="w-100 flex justify-center items-center">
//       <div className="flex font-sans max-w-xl">
//         <div className="flex-none w-48 relative">
//           <img
//             src={product.image}
//             alt=""
//             className="absolute inset-0 w-full h-full object-cover"
//             loading="lazy"
//           />
//         </div>
//         <form className="flex-auto p-6">
//           <form method="dialog">
//             {/* if there is a button in form, it will close the modal */}
//             <button
//               className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//               onClick={handleClose}
//             >
//               ✕
//             </button>
//           </form>
//           <div className="flex flex-wrap">
//             <h1 className="flex-auto text-lg font-semibold text-slate-900">
//               {product.title}
//             </h1>
//             <div className="text-lg font-semibold text-slate-500">
//               ${product.price}
//             </div>
//             <div className="mt-6">
//               <h4 className="sr-only">Reviews</h4>
//               <div className="flex items-center">
//                 <div className="flex items-center">
//                   {[0, 1, 2, 3, 4].map((starRating) => (
//                     <StarIcon
//                       key={product.rating}
//                       className={classNames(
//                         product.rating.rate > starRating
//                           ? "text-yellow-400"
//                           : "text-gray-200",
//                         "h-5 w-5 flex-shrink-0"
//                       )}
//                       aria-hidden="true"
//                     />
//                   ))}
//                 </div>
//                 <p className="sr-only">{product.rating.rate} out of 5 stars</p>
//                 <a
//                   href="#"
//                   className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
//                 >
//                   {product.rating.count} reviews
//                 </a>
//               </div>
//             </div>
//             {/* <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
//                 Review {product.rating.rate}/5 ({product.rating.count})
//               </div> */}
//           </div>
//           <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
//             <div className="space-x-2 flex text-sm">{product.description}</div>
//           </div>
//           <div className="flex space-x-4 mb-6 text-sm font-medium">
//             <div className="flex-auto flex space-x-4">
//               <button
//                 className="h-10 px-6 font-semibold rounded-md bg-black text-white"
//                 type="submit"
//               >
//                 Buy now
//               </button>
//               <button
//                 className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
//                 type="button"
//               >
//                 Add to bag
//               </button>
//             </div>
//             <button
//               className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
//               type="button"
//               aria-label="Like"
//             >
//               <svg
//                 width="20"
//                 height="20"
//                 fill="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   clip-rule="evenodd"
//                   d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
//                 />
//               </svg>
//             </button>
//           </div>
//           <p className="text-sm text-slate-700">
//             Free shipping on all continental US orders.
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Modal;
