// import { ArrowLeftOutlined, LoadingOutlined } from '@ant-design/icons';
// import { ColorChooser, ImageLoader, MessageDisplay } from 'components/common';
// import { User1ShowcaseGrid } from 'components/user1';
// import { RECOMMENDED_USERS1, USER1 } from 'constants/routes';
// import { displayMoney } from 'helpers/utils';
// import {
//   useBasket,
//   useDocumentTitle,
//   useUser1,
//   useRecommendedUsers1,
//   useScrollTop
// } from 'hooks';
// import React, { useEffect, useRef, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import Select from 'react-select';

// const ViewUser1 = () => {
//   const { id } = useParams();
//   const { user1, isLoading, error } = useUser1(id);
//   const { addToBasket, isItemOnBasket } = useBasket(id);
//   useScrollTop();
//   useDocumentTitle(`View ${user1?.name || 'Item'}`);

//   const [selectedImage, setSelectedImage] = useState(user1?.image1 || '');
//   const [selectedSize, setSelectedSize] = useState('');
//   const [selectedColor, setSelectedColor] = useState('');

//   const {
//     recommendedUsers1,
//     fetchRecommendedUsers1,
//     isLoading: isLoadingFeatured,
//     error: errorFeatured
//   } = useRecommendedUsers1(6);
//   const colorOverlay = useRef(null);

//   useEffect(() => {
//     setSelectedImage(user1?.image1);
//   }, [user1]);

//   const onSelectedSizeChange = (newValue) => {
//     setSelectedSize(newValue.value);
//   };

//   const onSelectedColorChange = (color) => {
//     setSelectedColor(color);
//     if (colorOverlay.current) {
//       colorOverlay.current.value = color;
//     }
//   };

//   const handleAddToBasket = () => {
//     addToBasket({ ...user1, selectedColor, selectedSize: selectedSize || user1.sizes[0] });
//   };

//   return (
//     <main className="content">
//       {isLoading && (
//         <div className="loader">
//           <h4>Loading User1...</h4>
//           <br />
//           <LoadingOutlined style={{ fontSize: '3rem' }} />
//         </div>
//       )}
//       {error && (
//         <MessageDisplay message={error} />
//       )}
//       {(user1 && !isLoading) && (
//         <div className="product-view">
//           <Link to={USER1}>
//             <h3 className="button-link d-inline-flex">
//               <ArrowLeftOutlined />
//               &nbsp; Back to shop
//             </h3>
//           </Link>
//           <div className="product-modal">
//             {user1.imageCollection.length !== 0 && (
//               <div className="product-modal-image-collection">
//                 {user1.imageCollection.map((image) => (
//                   <div
//                     className="product-modal-image-collection-wrapper"
//                     key={image.id}
//                     onClick={() => setSelectedImage(image.url)}
//                     role="presentation"
//                   >
//                     <ImageLoader
//                       className="product-modal-image-collection-img"
//                       src={image.url}
//                     />

                    
//                   </div>
//                   // {post.imageCollection.length !== 0 
//                   // <div className="product-modal-image-collection">
//                   //   {post.imageCollection.map((image) => (
//                   //     <div
//                   //       className="product-modal-image-collection-wrapper"
//                   //       key={image.id}
//                   //       onClick={() => setSelectedImage(image.url)}
//                   //       role="presentation"
//                   //     >
//                   //       <ImageLoader
//                   //         className="product-modal-image-collection-img"
//                   //         src={image.url}
//                   //       />
//                   //     </div>
//                   //   ))}
//                   // </div>
//                   // }
//                 ))}


//               </div>
//             )}


//             <div className="product-modal-image-wrapper">
//               {selectedColor && <input type="color" disabled ref={colorOverlay} id="color-overlay" />}
//               <ImageLoader
//                 alt={user1.name}
//                 className="product-modal-image"
//                 src={selectedImage}
//               />
//             </div>
//             <div className="product-modal-details">
//               <br />
//               <span className="text-subtle">{user1.brand}</span>
//               <h1 className="margin-top-0">{user1.name}</h1>
//               <span>{user1.description}</span>
//               <br />
//               <br />
//               <div className="divider" />
//               <br />
//               <div>
//                 <span className="text-subtle">Lens Width and Frame Size</span>
//                 <br />
//                 <br />
//                 <Select
//                   placeholder="--Select Size--"
//                   onChange={onSelectedSizeChange}
//                   options={user1.sizes.sort((a, b) => (a < b ? -1 : 1)).map((size) => ({ label: `${size} mm`, value: size }))}
//                   styles={{ menu: (provided) => ({ ...provided, zIndex: 10 }) }}
//                 />
//               </div>
//               <br />
//               {user1.availableColors.length >= 1 && (
//                 <div>
//                   <span className="text-subtle">Choose Color</span>
//                   <br />
//                   <br />
//                   <ColorChooser
//                     availableColors={user1.availableColors}
//                     onSelectedColorChange={onSelectedColorChange}
//                   />
//                 </div>
//               )}
//               <h1>{displayMoney(user1.price)}</h1>
//               <div className="product-modal-action">
//                 <button
//                   className={`button button-small ${isItemOnBasket(user1.id) ? 'button-border button-border-gray' : ''}`}
//                   onClick={handleAddToBasket}
//                   type="button"
//                 >
//                   {isItemOnBasket(user1.id) ? 'Remove From Basket' : 'Add To Basket'}
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div style={{ marginTop: '10rem' }}>
//             <div className="display-header">
//               <h1>Recommended</h1>
//               <Link to={RECOMMENDED_USERS1}>See All</Link>
//             </div>
//             {errorFeatured && !isLoadingFeatured ? (
//               <MessageDisplay
//                 message={error}
//                 action={fetchRecommendedUsers1}
//                 buttonLabel="Try Again"
//               />
//             ) : (
//               <User1ShowcaseGrid users1={recommendedUsers1} skeletonCount={3} />
//             )}
//           </div>
//         </div>
//       )}
//     </main>
//   );
// };

// export default ViewUser1;

// // okay