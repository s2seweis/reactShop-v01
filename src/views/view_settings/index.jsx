// import { ArrowLeftOutlined, LoadingOutlined } from '@ant-design/icons';
// import { ColorChooser, ImageLoader, MessageDisplay } from 'components/common';
// import { SettingShowcaseGrid } from 'components/settings';
// import { RECOMMENDED_SETTINGS, SHOP } from 'constants/routes';
// import { displayMoney } from 'helpers/utils';
// import {
//   useBasket,
//   useDocumentTitle,
//   useSetting,
//   useRecommendedSettings,
//   useScrollTop
// } from 'hooks';
// import React, { useEffect, useRef, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import Select from 'react-select';




// const ViewSetting = () => {
//   const { id } = useParams();
//   const { setting, isLoading, error } = useSetting(id);
//   const { addToBasket, isItemOnBasket } = useBasket(id);
//   useScrollTop();
//   useDocumentTitle(`View ${setting?.name || 'Item'}`);

//   const [selectedImage, setSelectedImage] = useState(setting?.image || '');
//   const [selectedSize, setSelectedSize] = useState('');
//   const [selectedColor, setSelectedColor] = useState('');

//   const {
//     recommendedSettings,
//     fetchRecommendedSettings,
//     isLoading: isLoadingFeatured,
//     error: errorFeatured
//   } = useRecommendedSettings(6);
//   const colorOverlay = useRef(null);

//   useEffect(() => {
//     setSelectedImage(setting?.image);
//   }, [setting]);

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
//     addToBasket({ ...setting, selectedColor, selectedSize: selectedSize || setting.sizes[0] });
//   };

//   return (
//     <main className="content">
//       {isLoading && (
//         <div className="loader">
//           <h4>Loading Product...</h4>
//           <br />
//           <LoadingOutlined style={{ fontSize: '3rem' }} />
//         </div>
//       )}
//       {error && (
//         <MessageDisplay message={error} />
//       )}
//       {(setting && !isLoading) && (
//         <div className="product-view">
//           <Link to={SHOP}>
//             <h3 className="button-link d-inline-flex">
//               <ArrowLeftOutlined />
//               &nbsp; Back to shop1
//             </h3>
//           </Link>
//           <div className="product-modal">
//             {setting.imageCollection.length !== 0 && (
//               <div className="product-modal-image-collection">
//                 {setting.imageCollection.map((image) => (
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
//                 ))}
//               </div>
//             )}
//             <div className="product-modal-image-wrapper">
//               {selectedColor && <input type="color" disabled ref={colorOverlay} id="color-overlay" />}
//               <ImageLoader
//                 alt={setting.name}
//                 className="product-modal-image"
//                 src={selectedImage}
//               />
//             </div>
//             <div className="product-modal-details">
//               <br />
//               <span className="text-subtle">{setting.brand}</span>
//               <h1 className="margin-top-0">{setting.name}</h1>
//               <span>{setting.description}</span>
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
//                   options={setting.sizes.sort((a, b) => (a < b ? -1 : 1)).map((size) => ({ label: `${size} mm`, value: size }))}
//                   styles={{ menu: (provided) => ({ ...provided, zIndex: 10 }) }}
//                 />
//               </div>
//               <br />
//               {setting.availableColors.length >= 1 && (
//                 <div>
//                   <span className="text-subtle">Choose Color</span>
//                   <br />
//                   <br />
//                   <ColorChooser
//                     availableColors={setting.availableColors}
//                     onSelectedColorChange={onSelectedColorChange}
//                   />
//                 </div>
//               )}
//               <h1>{displayMoney(setting.price)}</h1>
//               <div className="product-modal-action">
//                 <button
//                   className={`button button-small ${isItemOnBasket(setting.id) ? 'button-border button-border-gray' : ''}`}
//                   onClick={handleAddToBasket}
//                   type="button"
//                 >
//                   {isItemOnBasket(setting.id) ? 'Remove From Basket' : 'Add To Basket'}
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div style={{ marginTop: '10rem' }}>
//             <div className="display-header">
//               <h1>Recommended</h1>
//               <Link to={RECOMMENDED_SETTINGS}>See All</Link>
//             </div>
//             {errorFeatured && !isLoadingFeatured ? (
//               <MessageDisplay
//                 message={error}
//                 action={fetchRecommendedSettings}
//                 buttonLabel="Try Again"
//               />
//             ) : (
//               <SettingShowcaseGrid settings={recommendedSettings} skeletonCount={3} />
//             )}
//           </div>
//         </div>
//       )}
//     </main>
//   );
// };

// export default ViewSetting;
